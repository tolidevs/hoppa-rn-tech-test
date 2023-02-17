import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

type ButtonProps = {
    onPressHandler: () => void
    label: string
}

export const Button = ({ onPressHandler, label }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPressHandler} style={{borderColor: 'black', borderWidth: 1, paddingVertical: 2, paddingHorizontal: 4}}>
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}