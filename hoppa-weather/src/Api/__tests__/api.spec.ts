import axios, { AxiosResponse } from 'axios'

import {getForecast} from '../api'
import { ForecastResponse } from '../types'

const mockResponse: Partial<AxiosResponse<ForecastResponse>> = { data: { current: {}, forecast: {}, location: {}} as ForecastResponse}

jest.spyOn(axios, 'get').mockResolvedValue(mockResponse)


describe('getForecast', () => {
    it('returns the api response', async () => {
        expect(await getForecast()).toBe(mockResponse)
    })
})