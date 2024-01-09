import { createSlice } from "@reduxjs/toolkit";
import { asyncCreateDefaultTable } from "./table.thunk";

const initialState = {
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
    }
})

export default tableSlice.reducer
export const { getTablesFromLocal } = tableSlice.actions