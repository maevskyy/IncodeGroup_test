import { IconType } from "react-icons";

interface ITask {
    id: string;
    title: string;
}

interface IColumns {
    id: string;
    title: string;
    icon: IconType | null;
    tasks: ITask[]
}

export const defaultColums: IColumns[] = [
    {
        id: '1pmvp',
        title: 'To-Do',
        icon: null,
        tasks: [
            { id: '1212', title: 'title' }
        ]
    }
]