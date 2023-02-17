import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from './Button'
import { DetailScreenRouteProp } from '../navigation/types'
import { View, Image, Text } from 'react-native'

export const DetailScreen = () => {
    const navigation = useNavigation()
    const { params } = useRoute<DetailScreenRouteProp>()
    const { title, imageUri, headLine, min, max, rain } = params

    useEffect(() => {
        navigation.setOptions({headerLeft: () => <Button onPressHandler={navigation.goBack} label={'Back'} />, title })
    }, [])

    return (
        <View style={{alignItems: 'center', paddingTop: 24}}>
            <Image source={{uri: imageUri}} style={{width: 100, height: 100}} testID={`image-${imageUri}`} />
            <Text style={{fontSize: 20, marginVertical: 4}}>{headLine}</Text>
            <Text style={{fontSize: 12, marginTop: 4}}>{`min ${Math.round(min)}°C  max ${Math.round(max)}°C`}</Text>
            <Text style={{fontSize: 12 , marginTop: 4}}>{`${rain}% chance of rain`}</Text>
        </View>
    )
}