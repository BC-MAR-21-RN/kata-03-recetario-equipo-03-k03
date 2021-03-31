import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const meals = require('../data/recetas.json')

const MealDets = ({navigation, route}) => {
  const {
    mealName,
    mealIngredients,
    mealCategory,
    imgUrl,
    mealServings,
    mealFav,
  } = route.params;

  const [isFav, setFav] = useState(mealFav);

  const changeFavStatus = mealName => {
    setFav(!isFav);
    for (var i in meals) {
      if (meals[i].name == mealName) {
        meals[i].favorite == true
          ? (meals[i].favorite = false)
          : (meals[i].favorite = true);
        break;
      }
    }
  };

  return (
    <View style={styles.mealDets}>
      <Image source={{uri: imgUrl}} style={styles.mealDetsImg} />
      <View style={styles.iconBar}>
        <Icon
          name="times"
          size={30}
          color="white"
          style={styles.closeIcon}
          onPress={() => navigation.goBack()}
        />
        <Icon
          name="share-alt"
          size={25}
          color="white"
          style={styles.singleIcon}
        />
        {isFav == true ? (
          <Icon
            name="heart"
            size={25}
            color="white"
            style={styles.singleIcon}
            onPress={() => changeFavStatus(mealName)}
          />
        ) : (
          <Icon
            name="heart-o"
            size={25}
            color="white"
            style={styles.singleIcon}
            onPress={() => changeFavStatus(mealName)}
          />
        )}
      </View>
      <Text style={styles.categoryText}>{mealCategory}</Text>
      <Text style={styles.titleText}>{mealName}</Text>

      <ScrollView>
        <Text style={styles.servingsText}>
          Ingredients{'\n'}for {mealServings} servings
        </Text>
        {mealIngredients.map(ingredient => (
          <View key={ingredient.id} style={styles.ingredients}>
            <Text style={styles.textStyle}>{ingredient.name}</Text>
            <Text style={styles.textStyle}>{ingredient.amount}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mealDets: {
    flex: 1,
    backgroundColor: '#282828',
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
  },
  ingredients: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#323232',
  },
  iconBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    padding: 20,
  },
  singleIcon: {
    paddingHorizontal: 10,
  },
  closeIcon: {
    right: 270,
  },
  titleText: {
    fontSize: 25,
    color: 'white',
    position: 'absolute',
    left: 10,
    top: 290,
  },
  servingsText: {
    color: 'white',
    fontSize: 25,
    padding: 10,
  },
  categoryText: {
    fontSize: 25,
    color: 'white',
    position: 'absolute',
    left: 10,
    top: 260,
  },
  mealDetsImg: {
    width: '100%',
    height: '50%',
    opacity: 0.5,
  },
});
export default MealDets;
