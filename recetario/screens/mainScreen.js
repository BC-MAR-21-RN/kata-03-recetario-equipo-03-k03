import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HorizonalList from '../components/HorizontalList';
import SearchBar from '../components/searchBar';
const MainScreen = () => {

    return (
        <View style={styles.body} >
            <SearchBar />
            <HorizonalList title='Trending' />
            <HorizonalList title='Recent' />
        </View>
    )
};
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#282828',
        padding: 5,
    }
})


export default MainScreen;
