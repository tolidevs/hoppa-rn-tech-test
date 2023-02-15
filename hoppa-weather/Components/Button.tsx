import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

type ButtonProps = {
    onPressHandler: () => void
    label: string
}

export const Button = ({ onPressHandler, label }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPressHandler}>
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}