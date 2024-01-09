import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDranNDrop } from 'src/shared/lib/hooks/useDragAndDrop';
import { useAppSelector } from 'src/shared/lib/hooks/useRedux';
import { IColumn } from 'src/shared/types/table.types';
import { stateControler } from './entities/stateController';
import Column from './components/column';
import AddColumn from './components/column/components/AddColumn';

const Table = () => {
	const { id: tableFrontId } = useParams();

	const tablesData = useAppSelector((state) => state.tableReducer.data).find(
		(table) => table.id === tableFrontId
	);

	const [allColumns, setAllColumns] = useState<IColumn[]>(tablesData?.columns ?? []);

	// add\delete column and add\delete task
	const stateControllers = stateControler(setAllColumns);
	// dragLeave, dragOver and so on
	const dragAndDrop = useDranNDrop(setAllColumns);

	// updating state every time store changes
	useEffect(() => {
		setAllColumns(tablesData?.columns ?? []);
	}, [tablesData]);

	return (
		<main className='flex flex-1 gap-10 px-5 my-5 overflow-auto scrollbar_custom'>
			{allColumns.map((column) => (
				<div
					key={column.id}
					onDragOver={(e) => dragAndDrop.dragOverHandler(e)}
					onDrop={(e) => dragAndDrop.dropCardHandler(e, column)}
				>
					<Column
						columnFullInfo={column}
						stateControllers={stateControllers}
						dragAndDrop={dragAndDrop}
					/>
				</div>
			))}
			<AddColumn addColumn={stateControllers.addNewColumnHandler} />
		</main>
	);
};

export default Table;
