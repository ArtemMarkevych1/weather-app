import {
	getCityWeatherAction
} from './city.actions'
import { IApiRequest } from './types'
import { CityApi } from '../../api'
import { AppThunk } from '../index.thunk'


export const gerCityWeatherAsync = ( data: IApiRequest ): AppThunk => {
	return async ( dispatch ) => {
		dispatch( getCityWeatherAction.request() )
		try {
			const result = await CityApi.getCityWeather( data )
			dispatch( getCityWeatherAction.success( result ) )

		} catch ( e ) {
			dispatch( getCityWeatherAction.failure( e ) )
		}
	}
}
