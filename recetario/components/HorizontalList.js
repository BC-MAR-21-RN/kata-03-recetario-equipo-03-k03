import React, { useState } from 'react'
import { Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import ListItem from './listItem'
import meals from './recetas'
const HorizonalList = ({ title, customHeight, data }) => {


    const [recentData, setRecentData] = useState([])
    const itemList = ({ item }) => (
        item.trending == true ?
            <TouchableOpacity onPress={() =>
                setRecentData([...recentData, {
                    id: item.id,
                    name: item.name,
                    servings: item.servings,
                    favorite: item.favorite,
                    ingredients: item.ingredients,
                    trending: item.trending,
                    recent: item.recent,
                    imgUrl: item.imgUrl
                }])
            }>

                <ListItem meal={item.name} imgSrc={{ uri: item.imgUrl }} imgHeight={customHeight} />
            </TouchableOpacity>
            : null
    )

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={meals}
                renderItem={itemList}
                keyExtractor={(item) => item.id}
                horizontal={true} />

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
    }

})

export default HorizonalList