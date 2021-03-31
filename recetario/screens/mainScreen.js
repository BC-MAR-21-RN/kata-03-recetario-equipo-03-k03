import React, {useState} from 'react';
import {StyleSheet, ScrollView, SafeAreaView, View} from 'react-native';
import HorizonalList from '../components/HorizontalList';
import meals from '../components/recetas';
import SearchBar from '../components/searchBar';

const MainScreen = ({navigation}) => {
  const [newItems, setItems] = useState([]);
  const [arr, setArr] = useState([]);

  const filterItems = item => {
    if (arr.includes(item.id) === false) {
      setItems([...newItems, item]);
      setArr([...arr, item.id]);
    }
    changeScreen(item, 'TRENDING');
  };

  const changeScreen = (item, category = 'RECENT') => {
    navigation.navigate('mealDets', {
      mealCategory: category,
      mealName: item.name,
      mealIngredients: item.ingredients,
      imgUrl: item.imgUrl,
      mealServings: item.servings,
      mealFav: item.favorite,
    });
  };

  return (
    <View style={styles.body}>
      <ScrollView>
        <SearchBar />
        <HorizonalList
          title="Trending"
          customHeight={100}
          myData={meals}
          onPress={filterItems}
        />
        <HorizonalList
          title="Recent"
          customHeight={150}
          myData={newItems}
          onPress={changeScreen}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#282828',
    padding: 5,
  },
});

export default MainScreen;
