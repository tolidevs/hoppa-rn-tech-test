/* For speed I have only explicitly typed the parts of the response that we're using
    and given the rest of the fields a generic object type
*/

export type ForecastResponse = {
    current: Record<string, unknown>,
    forecast: {
        forecastday: Forecast[]
    },
    location: Record<string, unknown>
}

export type Forecast = {
    date: string,
    date_epoch: number,
    day: DayForecast,
    astro: Record<string, unknown>,
    hour: Record<string, unknown>[]
}

type DayForecast = {
    maxtemp_c: number,
    maxtemp_f: number,
    mintemp_c: number,
    mintemp_f: number,
    avgtemp_c: number,
    avgtemp_f: number,
    maxwind_mph: number,
    maxwind_kph: number,
    totalprecip_mm: number,
    totalprecip_in: number,
    totalsnow_cm: number,
    avgvis_km: number,
    avgvis_miles: number,
    avghumidity: number,
    daily_will_it_rain: number,
    daily_chance_of_rain: number,
    daily_will_it_snow: number,
    daily_chance_of_snow: number,
    condition: {
        text: string,
        icon: string,
        code: number
    },
    uv: number 
}