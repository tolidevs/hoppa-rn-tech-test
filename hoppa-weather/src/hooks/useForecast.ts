import React, { useEffect, useState } from 'react'
import { getForecast } from '../Api/api'
import { Forecast } from '../Api/types'

export const useForecast = () => {
    const [forecast, setForecast] = useState<Forecast[]>()
    const [error, setError] = useState<boolean>(false)


    useEffect(() => {
        const getForecastList = async () => {
            await getForecast()
            .then(res => setForecast(res.data.forecast.forecastday))
            .catch(err => setError(true))
        }
        
        getForecastList()
    }, [])

    return {
        forecast,
        error
    }
}