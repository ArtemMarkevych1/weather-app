import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import { store } from './store/store'
import { WeatherPage } from './components/weather-page'

function App() {
	return (
		<Provider store={ store }>
			<WeatherPage/>
		</Provider>
	)
}

export default App
