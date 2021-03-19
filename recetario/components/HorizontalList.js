import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const HorizonalList = ({ title }) => {
    return (
        <View>
            <Text >{title}</Text>
            <FlatList></FlatList>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        color: 'pink'
    }

})

export default HorizonalList