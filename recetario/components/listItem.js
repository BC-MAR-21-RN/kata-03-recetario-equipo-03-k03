import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ListItem = ({ meal, imgSource }) => {
    return (
        <View style={styles.listItem}>
            <Image source={imgSource} />
            <Text> {meal}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    listItem: {

    }
})

export default ListItem