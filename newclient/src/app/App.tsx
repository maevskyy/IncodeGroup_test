import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import { useEffect } from 'react';
import Dashboard from 'src/pages/dashboard';
import Table from 'src/pages/table';
import Header from 'src/pages/components/header';
import axios from 'axios';
import { useAppDispatch } from 'src/shared/lib/hooks/useRedux';
import { asyncCreateDefaultTable } from 'src/shared/lib/redux/slices/table/table.thunk';
import { getTablesFromLocal } from 'src/shared/lib/redux/slices/table/table.slice';

const App = () => {
	const dispatch = useAppDispatch();
	//axios config
	axios.defaults.baseURL = 'http://localhost:8888';
	axios.defaults.withCredentials = true;

	useEffect(() => {
		const fetchData = () => {
			//creating default table and setting it to the local ( in the table.thunk )
			//if tables already exist in the local - get them from there
			const getFromLocal = localStorage.getItem('tables');

			if (getFromLocal) {
				console.log('local');
				dispatch(getTablesFromLocal(JSON.parse(getFromLocal)));
			} else {
				console.log('async');
				dispatch(asyncCreateDefaultTable());
			}
		};

		fetchData();
	}, [dispatch]);

	return (
		<div className='app'>
			<div className='w-[1100px] mx-5 py-5 h-full overflow-auto flex flex-col '>
				<Header />
				<Routes>
					<Route
						path='/table/:id'
						Component={Table}
					/>
					<Route
						path='/*'
						Component={Dashboard}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default App;
