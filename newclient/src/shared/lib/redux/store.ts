import { configureStore } from "@reduxjs/toolkit";
import tableReducer from './slices/table/table.slice'
import searchedTableReducer from './slices/searchedTable/searchedTable.slice'

const store = configureStore({
    reducer: {
        tableReducer,
        searchedTableReducer
    }
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>