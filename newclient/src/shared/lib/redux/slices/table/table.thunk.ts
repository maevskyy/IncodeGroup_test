import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { defaultTableData } from "src/shared/assets/defaultTable";
import { ITable } from "src/shared/types/table.types";

export const asyncCreateDefaultTable = createAsyncThunk('table/asyncCreateDefaultTable', async () => {
    //create table
    const createRes = await axios.post('table', { ...defaultTableData })
    const createdTableId = createRes.data.table._id

    //grab the table
    const getRes = await axios.get(`table/${createdTableId}`)
    //setting first created column to local
    localStorage.setItem('tables', JSON.stringify([getRes.data.data]));

    return [getRes.data.data]

})

export const asyncCreateTable = createAsyncThunk('table/asyncCreateTable', async (table: ITable) => {
    //create table
    const createRes = await axios.post('table', { ...table })
    const createdTableId = createRes.data.table._id

    //grab the table
    const getRes = await axios.get(`table/${createdTableId}`)
    return getRes.data.data


})

export const asyncDeleteTable = createAsyncThunk('table/asyncDeleteTable', async (tableId: string) => {
    await axios.delete(`table/${tableId}`)
    return tableId
})