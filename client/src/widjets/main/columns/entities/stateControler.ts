import { IColumn, ITask, TStateController } from './types'

//!FIX
/* eslint-disable prettier/prettier */
export const stateControler = (setAllColumns: React.Dispatch<React.SetStateAction<IColumn[]>>): TStateController => {
    const addNewColumnHandler = (newColumn: IColumn) => {
        setAllColumns((prevColumns) => [...prevColumns, newColumn])
    }

    const deleteColumnHandler = (columnId: string) =>
        setAllColumns((prevColumns) =>
            prevColumns.filter((column) => column.id !== columnId),
        )

    const addNewTaskHandler = (columnId: string, task: ITask) => {
        setAllColumns((prevColumns) =>
            prevColumns.map((column) => {
                if (column.id === columnId) {
                    return {
                        ...column,
                        tasks: [...column.tasks, task],
                    }
                }
                return column
            }),
        )
    }

    const deleteTaskHandler = (columnId: string, taskId: string) => {
        setAllColumns((prevColumns) =>
            prevColumns.map((column) => {
                if (column.id === columnId) {
                    return {
                        ...column,
                        tasks: column.tasks.filter((task) => task.id !== taskId),
                    }
                }
                return column
            }),
        )
    }

    return {
        addNewColumnHandler,
        deleteColumnHandler,
        addNewTaskHandler,
        deleteTaskHandler,
    }
}
