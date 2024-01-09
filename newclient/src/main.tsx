import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import store from './shared/lib/redux/store.ts';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'src/app/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
