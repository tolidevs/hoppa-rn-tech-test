import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button } from './Button'

export const ListScreen = () => {
    const navigation = useNavigation()

    return (<Button label="details" onPressHandler={() => navigation.navigate('Detail', {title: 'Monday'})}/>)
}