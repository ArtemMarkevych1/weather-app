export interface CityModel {
	temp: string
	list: {main: string}[]
}

export interface CityStateInterface {
	loading: boolean
	city: CityModel | null;
}

export interface IApiRequest {
	city: string
}

export interface DispatchPayload {
	fieldName: string;
	newValue: any;
	positionInArray?: number;
	pathToArray?: string;
}

