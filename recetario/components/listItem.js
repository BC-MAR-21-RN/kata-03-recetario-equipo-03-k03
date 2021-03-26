import React from 'react'
import { Text, Image, StyleSheet, View } from 'react-native'


const ListItem = ({ meal, imgSrc, imgHeight }) => {
    return (
        <View style={styles.listItem}>
            <Image source={imgSrc} style={{
                height:  imgHeight ,
                width: 120,
                borderRadius: 15,
                resizeMode:'stretch'
            }} />
            <Text style={styles.textItem}>{meal}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    listItem: {
        alignItems: 'baseline',
        justifyContent: 'space-evenly',
        height: 250
    },
    textItem: {
        color: 'white',
        fontSize: 20,
        width:150
    }
})

export default ListItem