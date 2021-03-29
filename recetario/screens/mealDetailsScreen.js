import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MealDets = ({ navigation, route }) => {
    return (
        <View style={styles.mealDets}>
            <Text> HEY </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mealDets:{
        flex:1
    }
})

export default MealDets