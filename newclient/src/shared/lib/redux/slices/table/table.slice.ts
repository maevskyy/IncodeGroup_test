import { createSlice } from "@reduxjs/toolkit";
import { asyncCreateDefaultTable, asyncCreateTable, asyncDeleteTable } from "./table.thunk";
import { ITable } from "src/shared/types/table.types";

type TInitState = {
    data: ITable[],
    loading: boolean,
    error: null | string
}

const initialState: TInitState = {
    data: [],
    loading: false,
    error: null
}

export const tableSlice = createSlice({
    name: 'tableSlice',
    initialState,
    reducers: {
        getTablesFromLocal: (state, action) => {
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(asyncCreateDefaultTable.pending, state => {
                state.loading = true
                state.error = null;
            })
            .addCase(asyncCreateDefaultTable.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
                state.error = null;
            })
            .addCase(asyncCreateDefaultTable.rejected, (state) => {
                state.loading = false;
            })
            // asyncCreateTable
            .addCase(asyncCreateTable.pending, state => {
                state.loading = true
                state.error = null;
            })
            .addCase(asyncCreateTable.fulfilled, (state, action) => {
                state.loading = false
                state.data = [...state.data, action.payload]
                //setting in local
                const getTablesFromLocal: ITable[] = JSON.parse(localStorage.getItem('tables') as string)
                const addInArr = [...getTablesFromLocal, action.payload]
                localStorage.setItem('tables', JSON.stringify(addInArr))

                state.error = null;
            })
            .addCase(asyncCreateTable.rejected, (state) => {
                state.loading = false;
            })
            // asyncDeleteTable
            .addCase(asyncDeleteTable.pending, state => {
                state.loading = true
                state.error = null;
            })
            .addCase(asyncDeleteTable.fulfilled, (state, action) => {
                state.loading = false
                state.data = state.data.filter((table) => table._id !== action.payload)
                //setting in local
                const getTablesFromLocal: ITable[] = JSON.parse(localStorage.getItem('tables') as string)
                const addInArr = getTablesFromLocal.filter((table) => table._id !== action.payload)
                localStorage.setItem('tables', JSON.stringify(addInArr))

                state.error = null;
            })
            .addCase(asyncDeleteTable.rejected, (state) => {
                state.loading = false;
            })
    }
})

export default tableSlice.reducer
export const { getTablesFromLocal } = tableSlice.actions