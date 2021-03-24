import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const HorizonalList = ({ title }) => {
    const mealsData = require('../data/recetas.json')
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={mealsData}
                renderItem={({ item, id }) => {
                    <View>
                        <Text style={styles.item}>{item.name}</Text>
                    </View>
                }}
                keyExtractor={item => item.id} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        color: '#F50087',
        fontSize: 50
    },
    item: {
        color: 'white',
        fontSize: 70,

    }
})

export default HorizonalList