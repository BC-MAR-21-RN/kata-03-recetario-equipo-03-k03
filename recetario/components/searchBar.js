import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Icon } from 'react-native-elements'


const SearchBar = () => {
    return (
        <View style={style.barContainer}>
        <TextInput placeholder='What do you want to eat??' placeholderTextColor='white' style={style.bar} />
        </View>
    )
}

const style = StyleSheet.create({
    bar: {
        backgroundColor: '#343435',
        borderRadius: 10,
        height: 40,
        color:'white',
        margin: 12,
        borderWidth: 0,
    },

    barContainer: {
      

    }
})

export default SearchBar