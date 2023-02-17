import React from 'react'
import { render } from '@testing-library/react-native'

import { DetailScreen } from '../DetailScreen'
import { DetailScreenNavProps } from '../../navigation/types'


const mockGoBack = jest.fn()
const mockSetOptions = jest.fn()
const mockRoute = jest.fn((): DetailScreenNavProps => ({ 
    title: 'title', 
    imageUri: 'https://image.com', 
    headLine: 'weather', 
    min: 1, 
    max: 10, 
    rain: 50
}))

jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({ goBack: mockGoBack, setOptions: mockSetOptions}),
    useRoute: () => ({ params: mockRoute()})
}))

describe('DetailScreen', () => {
    const renderComponent = () => render(<DetailScreen/>)

    it('sets the back button and title', () => {
        renderComponent()

        expect(mockSetOptions).toHaveBeenCalled()
    })

    it('renders weather details as expected', () => {
        const { getByText, getByTestId }  = renderComponent()

        expect(getByText('weather')).toBeTruthy()
        expect(getByText('min 1°C  max 10°C')).toBeTruthy()
        expect(getByText('50% chance of rain')).toBeTruthy()
        expect(getByTestId('image-https://image.com')).toBeTruthy()
    })
})