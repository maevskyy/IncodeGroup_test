import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ITable } from "src/shared/types/table.types";
import axios from "axios";

export const asyncGetTable = createAsyncThunk('table/asyncCreateTable', async (tableId: string) => {
    const response = await axios.get(`table/${tableId}`)
    return response.data.data
})

type TInitState = {
    data: ITable,
    loading: boolean,
    error: null | string
}

const initialState: TInitState = {
    data: {
        id: "",
        title: "",
        columns: []
    },
    loading: false,
    error: null
}

export const searchedTableSlice = createSlice({
    name: 'searchedTableSlice',
    initialState,
    reducers: {
        setupUserTable: (state, action) => {
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(asyncGetTable.pending, state => {
                state.loading = true
                state.error = null;
            })
            .addCase(asyncGetTable.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
                state.error = null;
            })
            .addCase(asyncGetTable.rejected, (state) => {
                state.loading = false;
            })
    }
})

export default searchedTableSlice.reducer
export const { setupUserTable } = searchedTableSlice.actions