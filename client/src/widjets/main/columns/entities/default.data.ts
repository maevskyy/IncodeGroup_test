import { FcBookmark, FcCheckmark, FcSerialTasks } from 'react-icons/fc'
import { IColumn } from './types'
import { generateId } from 'src/shared/helpers/idGenerator';

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
