import React from 'react'

import { render, fireEvent } from '@testing-library/react-native'

import { Button } from '../Button'

const mockOnPress = jest.fn()

describe('Button', () => {
    const renderComponent = () => render(<Button label='test' onPressHandler={mockOnPress} />)
    it('renders the label', () => {
        
        const { getByText } = renderComponent()

        expect(getByText('test')).toBeTruthy()
    })

    it('renders the label', () => {
        const { getByText } = renderComponent()

        fireEvent.press(getByText('test'))

        expect(mockOnPress).toHaveBeenCalled()
    })
})