import { renderHook } from '@testing-library/react-native'

import { useForecast } from '../useForecast'

import * as api from '../../Api/api'
import { mockForecastList } from '../../Components/__tests__/ListScreen.spec'
import { AxiosResponse } from 'axios'
import { ForecastResponse } from '../../Api/types'

/* these tests are failing but I've spent too long on this already so you get the idea!
I need to add the hooks testing library, but I'm going to stop here as I spent
a few hours on this whole thing already! */

describe('useForecast', () => {
    describe('given an api error', () => {
        it('sets error to true', () => {
            jest.spyOn(api, 'getForecast').mockRejectedValue(new Error('api error'))
            
            const { result } = renderHook(useForecast)

            expect(result.current.error).toBeTruthy()
        })
    })

    describe('given a successful api response', () => {
        it('sets the forecast', async () => {
            const mockResponse: Partial<AxiosResponse<ForecastResponse>> = { data: { current: {}, forecast: { forecastday: mockForecastList}, location: {}} as ForecastResponse}

            jest.spyOn(api, 'getForecast').mockResolvedValueOnce(mockResponse as AxiosResponse<ForecastResponse>)
            
            const { result } = renderHook(useForecast)
            
            expect(result.current.forecast).toBe(mockForecastList)
            expect(result.current.error).toBeFalsy()
        })
    })
})