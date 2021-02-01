import { CityActionTypes, getCityWeatherAction } from './city.actions'
import { getType } from 'typesafe-actions'
import { CityStateInterface } from './types'

const initState: CityStateInterface = {
	loading: false,
	city: null,
}

export function cityReducer( state = initState, action: CityActionTypes ): any {
	switch ( action.type ) {

		case getType( getCityWeatherAction.request ): {
			return {
				...state,
				loading: true,
			}
		}

		case getType( getCityWeatherAction.success ): {
			return {
				...state,
				loading: false,
				city: action.payload.list[0].main,
			}
		}

		case getType( getCityWeatherAction.failure ): {
			return {
				...state,
				loading: false,
			}
		}

		default:
			return { ...state }
	}
}
