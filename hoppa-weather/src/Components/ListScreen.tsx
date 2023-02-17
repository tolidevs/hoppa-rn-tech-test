import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, View, Text, TouchableOpacity } from 'react-native'
import { Forecast } from '../Api/types'
import { useForecast } from '../hooks/useForecast'

export const ListScreen = () => {
    const navigation = useNavigation()
    const { forecast, error } = useForecast()

    const renderItem = (props: {item: Forecast}) => {
        const { maxtemp_c, mintemp_c, daily_chance_of_rain, condition } = props.item.day
        const icon = `https:${condition.icon}`

        const onPressHandler = () => navigation.navigate('Detail', { 
            title: `${new Date(props.item.date).toDateString()}`,
            imageUri: icon,
            headLine: condition.text,
            min: mintemp_c,
            max: maxtemp_c,
            rain: daily_chance_of_rain
        })
        
        return( 
            <TouchableOpacity 
                style={{
                    flexDirection: 'row', 
                    paddingHorizontal: 8, 
                    paddingVertical: 12, 
                    alignItems: 'center'
                }}
                onPress={onPressHandler}
                >
                <Image source={{uri: icon}} style={{width: 50, height: 50, marginRight: 4}} />
                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
                    <View style={{ justifyContent: 'center'}}>
                        <Text style={{fontSize: 16}}>{condition.text}</Text>
                        <View style={{flexDirection: 'row', marginTop: 2}}>
                            <Text style={{fontSize: 12, width: 60}}>{`min ${Math.round(mintemp_c)}°C`}</Text>
                            <Text style={{fontSize: 12, width: 60}}>{`max ${Math.round(maxtemp_c)}°C`}</Text>
                        </View>   
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 16}}>{`${daily_chance_of_rain}%`}</Text>
                        <Text style={{fontSize: 8}}>{'Chance of Rain'}</Text>
                    </View>
                </View>
            </TouchableOpacity>)
    }
    
    const separator = () => <View style={{height: 1, borderBottomWidth: 1, borderBottomColor: 'black'}} />

    return (<>
                {error ? (
                    <Text>{"Sorry, we couldn't get the forecast, try again later!"}</Text>)
                    :
                    (<FlatList 
                        data={forecast}
                        renderItem={renderItem}
                        keyExtractor={item => item.date}
                        ItemSeparatorComponent={separator}
                    />)
                }
            </>
            
    )
        
            
        
            
    
        
}