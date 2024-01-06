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
   tasks: ITask[] | []
}
