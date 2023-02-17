import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import * as hooks from '../../hooks/useForecast'
import { ListScreen } from '../ListScreen'
import { DayForecast, Forecast } from '../../Api/types'

const mockNavigate = jest.fn()
jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({ navigate: mockNavigate }),
}))

const mockForecast: Partial<Forecast> = {
    date: '2023-02-16',
    date_epoch: 20230216,
    day: {
        maxtemp_c: 1,
        mintemp_c: 0,
        daily_chance_of_rain: 50,
        condition: {
            text: 'cloudy',
            icon: '//image.com',
            code: 123
        }
    }  as DayForecast
} 

export const mockForecastList = [mockForecast, {...mockForecast, date: '2023-02-17'}, {...mockForecast, date: '2023-02-18'}] as Forecast[]

describe('ListScreen', () => {
    const renderComponent = () => render(<ListScreen/>)

    describe('given API error', () => {
        jest.spyOn(hooks, 'useForecast').mockReturnValueOnce({forecast: [], error: true})

        it('renders error state', ()=> {
            const { getByText } = renderComponent()

            expect(getByText("Sorry, we couldn't get the forecast, try again later!")).toBeTruthy()
        })
    })

    describe('given API response', () => {
        beforeEach(() => {
            jest.spyOn(hooks, 'useForecast').mockReturnValueOnce({forecast: mockForecastList, error: false})
        })

        it('renders the forecast list', () => {
            const { getByTestId } = renderComponent()

            expect(getByTestId('forecast-list')).toBeTruthy()
        })

        it('renders the individual forecast items',  () => {
            const { queryAllByText, getByTestId } = renderComponent()

            expect(getByTestId('https://image.com-icon-0')).toBeTruthy()
            expect(getByTestId('https://image.com-icon-1')).toBeTruthy()
            expect(getByTestId('https://image.com-icon-2')).toBeTruthy()
            expect(queryAllByText('cloudy')).toHaveLength(3)
            expect(queryAllByText('min 0°C')).toHaveLength(3)
            expect(queryAllByText('max 1°C')).toHaveLength(3)
            expect(queryAllByText('50%')).toHaveLength(3)
            expect(queryAllByText('Chance of Rain')).toHaveLength(3)
        })

        it('navigates to the details when a forecast item is pressed', () => {
            const { getByTestId } = renderComponent()

            fireEvent.press(getByTestId('https://image.com-icon-0'))

            expect(mockNavigate).toHaveBeenCalled()
        })
    })
})