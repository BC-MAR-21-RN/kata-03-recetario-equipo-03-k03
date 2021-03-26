import React, {useState} from 'react';
import { StyleSheet, ScrollView, View, SafeAreaView } from 'react-native';
import HorizonalList from '../components/HorizontalList';
import meals from '../components/recetas';
import SearchBar from '../components/searchBar';


const MainScreen = () => {
    const [newItems, setItems] = useState([])
    const [arr, setArr] = useState([])

    const filterItems = (item) => {

        if (arr.includes(item.id) === false) {
            setItems([...newItems, item])
            setArr([...arr, item.id])
        }
    }
    
    return (
        <SafeAreaView style={styles.body} >
            <ScrollView>
                <SearchBar />
                <HorizonalList title='Trending' customHeight={100} myData={meals} onPress={filterItems} />
                <HorizonalList title='Recent' customHeight={150} myData={newItems}/>
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
