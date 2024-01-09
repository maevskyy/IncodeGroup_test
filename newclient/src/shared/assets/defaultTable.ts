import { generateId } from "../helpers/idGenerator";
import { FcBookmark, FcCheckmark, FcSerialTasks } from 'react-icons/fc'
import { IColumn } from 'src/shared/types/table.types'

export const defaultColums: IColumn[] = [
    {
        id: generateId(),
        title: 'To-Do',
        Icon: FcBookmark,
        tasks: [],
    },
    {
        id: generateId(),
        title: 'In progress',
        Icon: FcSerialTasks,
        tasks: [],
    },
    {
        id: generateId(),
        title: 'Completed',
        Icon: FcCheckmark,
        tasks: [],
    },
];


export const defaultTableData = {
    id: generateId(),
    title: 'Default dashboard',
    columns: defaultColums,
};