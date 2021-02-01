import { IApiRequest } from '../store/city/types'
import axios from 'axios'

const API_KEY = 'bad46dfee1ae1125ec4faf31e63449de'
const URL = 'http://api.openweathermap.org/data/2.5/forecast'

export class CityApi {
	static async getCityWeather(data: IApiRequest) {
		const {city} = data;
		return (await axios.get(`${URL}?q=${city}&appid=${API_KEY}`)).data;
	}
}


