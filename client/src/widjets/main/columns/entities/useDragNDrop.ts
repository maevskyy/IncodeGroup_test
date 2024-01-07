/* eslint-disable prettier/prettier */
import React, { useState } from "react"
import { IColumn, ITask, TRDragAndDrop } from "./types"


export const useDranNDrop = (setAllBoards: React.Dispatch<React.SetStateAction<IColumn[]>>): TRDragAndDrop => {
    const [currentBoard, setCurrentBoard] = useState<IColumn | null>(null);
    const [currentItem, setCurrentItem] = useState<ITask | null>(null);

    const dragOverHandler = (e: React.DragEvent<HTMLElement>) => {
        e.preventDefault();
        // if (e.target.className == 'item') {
        //    e.target.style.boxShadow = '0 4px 3px gray';
        // }
    };

    const dragLeaveHandler = () => {
        // e.target.style.boxShadow = 'none';
    };

    const dragStartHandler = (board: IColumn, task: ITask) => {
        setCurrentBoard(board);
        setCurrentItem(task);
    };

    const dragEndHandler = (e: React.DragEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        if (target) {
            target.style.boxShadow = 'none';
        }
    };

    const dragDropHandler = (e: React.DragEvent<HTMLElement>, board: IColumn, task: ITask) => {
        e.preventDefault();
        // delete
        if (currentBoard && currentItem) {
            //! FIX type
            //@ts-expect-error
            const currentIndex = currentBoard.tasks.indexOf(currentItem);
            currentBoard.tasks.splice(currentIndex, 1);
            //! FIX type
            //@ts-expect-error
            const dropIndex = board.tasks.indexOf(task);
            board.tasks.splice(dropIndex + 1, 0, currentItem);

            setAllBoards(prevColumns =>
                prevColumns.map((b) => {
                    if (b.id === board.id) {
                        return board;
                    }
                    if (b.id === currentBoard?.id) {
                        return currentBoard;
                    }
                    return b;
                }),
            );
        }
    };

    return {
        dragOverHandler,
        dragLeaveHandler,
        dragStartHandler,
        dragEndHandler,
        dragDropHandler
    }
} 