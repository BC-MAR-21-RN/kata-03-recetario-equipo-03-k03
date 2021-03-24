import React from 'react'
import { Text, StyleSheet, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import meals from './recetas'

const HorizonalList = ({ title }) => {


    const itemList = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.textitem}>{item.name}</Text>
            <Image style={styles.imagen} source={{ uri: item.imgUrl }} />
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList style={{}}
                data={meals}
                renderItem={itemList}
                keyExtractor={(item) => item.id}
                horizontal={true}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        color: '#F50087',
        fontSize: 50
    },
    textitem: {
        color: 'white',
        fontSize: 25,
    }, imagen:{
        height:55,
        width:55
    }
})

export default HorizonalList