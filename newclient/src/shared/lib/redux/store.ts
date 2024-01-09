import { configureStore } from "@reduxjs/toolkit";
import tableReducer from './slices/table/table.slice'

const store = configureStore({
    reducer: {
        tableReducer
    }
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>