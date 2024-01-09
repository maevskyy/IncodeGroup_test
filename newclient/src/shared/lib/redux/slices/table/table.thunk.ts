import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { defaultTableData } from "src/shared/assets/defaultTable";

export const asyncCreateDefaultTable = createAsyncThunk('table/asyncCreateDefaultTable', async () => {
    //create table
    const createRes = await axios.post('table', { ...defaultTableData })
    const createdTableId = createRes.data.table._id

    //grab the table
    const getRes = await axios.get(`table/${createdTableId}`)
    //setting first created column to local
    localStorage.setItem('tables', JSON.stringify([getRes.data.data]));

    return getRes.data.data

})
