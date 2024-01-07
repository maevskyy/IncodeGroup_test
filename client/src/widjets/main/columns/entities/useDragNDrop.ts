/* eslint-disable prettier/prettier */
import React, { useState } from "react"
import { IColumn, ITask, TRDragAndDrop } from "./types"


export const useDranNDrop = (setAllBoards: React.Dispatch<React.SetStateAction<IColumn[]>>): TRDragAndDrop => {
    const [currentBoard, setCurrentBoard] = useState<IColumn | null>(null);
    const [currentItem, setCurrentItem] = useState<ITask | null>(null);

    const dragOverHandler = (e: React.DragEvent<HTMLElement>) => {
        e.preventDefault();
    };

    const dragLeaveHandler = () => {
        // e.target.style.boxShadow = 'none'; // <- Пока закомментируем это, так как нет определения e.target
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

    const dragDropHandler = (e: React.DragEvent<HTMLElement>, board: IColumn) => {
        e.preventDefault();
        if (currentBoard && currentItem) {
            setAllBoards(prevColumns =>
                prevColumns.map((b) => {
                    if (b.id === board.id) {
                        return {
                            ...b,
                            tasks: [...b.tasks, currentItem],
                        };
                    }
                    if (b.id === currentBoard.id) {
                        return {
                            ...b,
                            tasks: b.tasks.filter(t => t !== currentItem),
                        };
                    }
                    return b;
                }),
            );
            setCurrentItem(null);
        }
    };

    const dropCardHandler = (e: React.DragEvent<HTMLElement>, board: IColumn) => {
        e.preventDefault();
        if (currentBoard !== null && currentItem !== null) {
            if (currentItem !== null && currentItem !== undefined) {
                board.tasks.push(currentItem);
                const currentIndex = currentBoard.tasks.indexOf(currentItem);
                currentBoard.tasks.splice(currentIndex, 1);

                setAllBoards(prevColumns =>
                    prevColumns.map((b) => {
                        if (b.id === board.id) {
                            return board;
                        }
                        if (b.id === currentBoard.id) {
                            return currentBoard;
                        }
                        return b;
                    }),
                );
            }
        }
    };

    return {
        dragOverHandler,
        dragLeaveHandler,
        dragStartHandler,
        dragEndHandler,
        dragDropHandler,
        dropCardHandler
    };
};