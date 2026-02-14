import { BrowserRouter } from 'react-router'

import Header from './components/Header'
import AppRoutes from './routes/AppRoutes'

import useLocalStorage from './utils/storage'

function App() {
	const {value: items, setValue: setItems, storeValue} = useLocalStorage("items");
	return (
		<BrowserRouter>
			<Header />
			<AppRoutes items={items} setItems={setItems} storeValue={storeValue} />
		</BrowserRouter>
	)
}

export default App
