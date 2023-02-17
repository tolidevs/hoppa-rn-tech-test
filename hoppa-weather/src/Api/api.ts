import axios, {AxiosResponse} from 'axios'
import { WEATHER_API_KEY } from '@env'
import { ForecastResponse } from './types'

const BASE_URL = 'https://api.weatherapi.com/v1/'

export const getForecast = async (): Promise<AxiosResponse<ForecastResponse>> => {
    const forecast = await axios.get(`${BASE_URL}forecast.json?key=${WEATHER_API_KEY}&q=London&days=7`)

    return forecast
}