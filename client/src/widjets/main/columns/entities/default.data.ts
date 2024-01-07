import { FcBookmark, FcCheckmark, FcSerialTasks } from 'react-icons/fc'
import { IColumn } from './types'

export const defaultColums: IColumn[] = [
   {
      id: '1pmvp',
      title: 'To-Do',
      Icon: FcBookmark,
      tasks: [],
   },
   {
      id: '1pmvp3',
      title: 'In progress',
      Icon: FcSerialTasks,
      tasks: [],
   },
   {
      id: '1pmv2p',
      title: 'Completed',
      Icon: FcCheckmark,
      tasks: [],
   },
];
