import { IconType } from 'react-icons';

export interface ITask {
   id: string
   title: string
   description: string
}

export interface IColumn {
   id: string
   title: string
   Icon: IconType | null
   tasks: ITask[]
}

//It's not supposed to be here, but I don't want to complicate things too much.
export interface ITable {
   id: string,
   title: string,
   columns: IColumn[]
}

export type TStateController = {
   addNewColumnHandler: (newColumn: IColumn) => void;
   deleteColumnHandler: (columnId: string) => void;
   addNewTaskHandler: (columnId: string, task: ITask) => void;
   deleteTaskHandler: (columnId: string, taskId: string) => void;
};

export type TRDragAndDrop = {
   dragOverHandler: (e: React.DragEvent<HTMLElement>) => void;
   dragLeaveHandler: () => void;
   dragStartHandler: (board: IColumn, task: ITask) => void;
   dragEndHandler: (e: React.DragEvent<HTMLElement>) => void;
   dragDropHandler: (
      e: React.DragEvent<HTMLElement>,
      board: IColumn,
      task: ITask,
   ) => void;
   dropCardHandler: (e: React.DragEvent<HTMLElement>, board: IColumn) => void
};