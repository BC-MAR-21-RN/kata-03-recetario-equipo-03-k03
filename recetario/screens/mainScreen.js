import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import HorizonalList from '../components/HorizontalList';
import SearchBar from '../components/searchBar';
const MainScreen = () => {

    return (
        <SafeAreaView style={styles.body}>           
            <SearchBar />
            <HorizonalList title='Trending' />
            <HorizonalList title='Recent' />           
        </SafeAreaView>
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
