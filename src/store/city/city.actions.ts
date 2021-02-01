import { ActionType, createAsyncAction } from 'typesafe-actions'
import { CityModel } from './types'

export enum CityActions {
	GET_CITY_WEATHER = 'GET_CITY_WEATHER',
	GET_CITY_WEATHER_SUCCESS = 'GET_CITY_WEATHER_SUCCESS',
	GET_CITY_WEATHER_ERROR = 'GET_CITY_WEATHER_ERROR',
}

export const getCityWeatherAction = createAsyncAction(
	CityActions.GET_CITY_WEATHER,
	CityActions.GET_CITY_WEATHER_SUCCESS,
	CityActions.GET_CITY_WEATHER_ERROR
)<undefined, CityModel, Error>();

export type CityActionTypes = ActionType<typeof getCityWeatherAction>
