import React, { useCallback } from 'react'
import { useReduxState } from '../../helpers/use-redux-state'
import { Form } from '../search-form'
import { useDispatch } from 'react-redux'
import { gerCityWeatherAsync } from '../../store/city/city.thunk'

export const WeatherPage = () => {
	const dispatch = useDispatch()

	const { city: { city }} = useReduxState()

	const getWeatherHandler = useCallback( event => {
		const city = event.target.elements.city.value
		event.preventDefault()

		dispatch( gerCityWeatherAsync( {
			city
		} ) )

	}, [ dispatch ] )

	return (
		<div>
			<Form getWeather={ getWeatherHandler }/>
			{ city?.temp }
		</div>

	)
}
