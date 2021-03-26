import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import HorizonalList from '../components/HorizontalList';
import SearchBar from '../components/searchBar';


const MainScreen = () => {

    return (
        <SafeAreaView style={styles.body}>
            <ScrollView>
                <SearchBar />
                <HorizonalList title='Trending' customHeight={100}  data={true}/>
                <HorizonalList title='Recent' customHeight={150} data={false}/>
            </ScrollView>
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
