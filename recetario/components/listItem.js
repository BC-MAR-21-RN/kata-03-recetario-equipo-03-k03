import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ListItem = ({meal, imgSource})=>{
    return(
        <View>
            <Image source={imgSource}/>
            <Text> {meal}</Text>
        </View>
    )
}

export default ListItem