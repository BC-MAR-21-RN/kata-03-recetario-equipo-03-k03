import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const HorizonalList = ({ title }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList> </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#F50087',
        fontSize: 50
    }
})

export default HorizonalList