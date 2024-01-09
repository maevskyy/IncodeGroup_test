import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDranNDrop } from 'src/shared/lib/hooks/useDragAndDrop';
import { useAppDispatch, useAppSelector } from 'src/shared/lib/hooks/useRedux';
import { IColumn } from 'src/shared/types/table.types';
import { stateControler } from './entities/stateController';
import Column from './components/column';
import AddColumn from './components/column/components/AddColumn';
import axios from 'axios';
import { setupUserTable } from 'src/shared/lib/redux/slices/searchedTable/searchedTable.slice';

const Table = () => {
	const { id: tableFrontId } = useParams();
	const dispatch = useAppDispatch();
	const tablesData = useAppSelector((state) => state.tableReducer.data).find(
		(table) => table.id === tableFrontId
	);

	const [allColumns, setAllColumns] = useState<IColumn[]>(tablesData?.columns ?? []);
	const [loading, setLoading] = useState(false);
	// add\delete column and add\delete task
	const stateControllers = stateControler(setAllColumns);
	// dragLeave, dragOver and so on
	const dragAndDrop = useDranNDrop(setAllColumns);

	// updating state every time store changes
	useEffect(() => {
		console.log(tablesData, 'this tableData');
		if (tablesData) {
			setAllColumns(tablesData?.columns ?? []);
		}
	}, [tablesData]);

	useEffect(() => {
		if (!tablesData) {
			//if i cannot find tablieId in local, i will look in DB
			setLoading(true);
			axios
				.get(`table/${tableFrontId}`)
				.then((res) => {
					setAllColumns(res.data.data.columns);
					dispatch(setupUserTable(res.data.data));
				})
				.catch(() => console.log('Canno find id like this'))
				.finally(() => setLoading(false));
		}
	}, [tableFrontId, dispatch, tablesData]);

	return (
		<main className='flex flex-1 gap-10 px-5 my-5 overflow-auto scrollbar_custom'>
			{loading ? (
				<p className='text-xs font-semibold text-end pt-2 text-blue-200'>Loading..</p>
			) : (
				<>
					{allColumns.length !== 0 ? (
						<>
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
						</>
					) : (
						<p className='text-xs font-semibold text-end pt-2 text-blue-200'>
							Cannot find table with this id
						</p>
					)}
				</>
			)}
		</main>
	);
};

export default Table;
