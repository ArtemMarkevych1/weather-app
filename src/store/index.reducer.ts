import {combineReducers} from 'redux';
import {cityReducer} from "./city/city.reducer";
import {CityStateInterface} from "./city/types";


export interface RootStateModel {
	city: CityStateInterface,
}

export const reducers = combineReducers<RootStateModel>({
	city: cityReducer
});
