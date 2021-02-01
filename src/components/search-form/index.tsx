import React from 'react'

interface IProps {
	getWeather: ( event: any ) => void
}

export const Form: React.FC<IProps> = ( { getWeather } ) => {

	return (
		<>
			<form onSubmit={ getWeather }>
				<input
					type='text'
					placeholder='city'
					name='city'
				/>
				<button>Submit</button>
			</form>
		</>
	)
}

