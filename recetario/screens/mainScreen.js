import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HorizonalList from '../components/HorizontalList';
import SearchBar from '../components/searchBar';
const MainScreen = () => {

    return (
        <View style={styles.body}>
            <SearchBar/>
            <HorizonalList/>
            <HorizonalList/>
        </View>
    )
};
const styles = StyleSheet.create({
    body: {
        backgroundColor: 'black'
    }
})


export default MainScreen;
