import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity, View, Text} from 'react-native';
import ListItem from './listItem';

const HorizonalList = ({title, customHeight, myData, onPress}) => {
  const itemList = ({item}) =>
    item.trending == true ? (
      <TouchableOpacity onPress={() => onPress(item)}>
        <ListItem
          meal={item.name}
          imgSrc={{uri: item.imgUrl}}
          imgHeight={customHeight}
        />
      </TouchableOpacity>
    ) : item.recent == true ? (
      <TouchableOpacity onPress={() => onPress(item)}>
        <ListItem
          meal={item.name}
          imgSrc={{uri: item.imgUrl}}
          imgHeight={customHeight}
        />
      </TouchableOpacity>
    ) : null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={myData}
        renderItem={itemList}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    color: '#F50087',
    fontSize: 50,
  },
});

export default HorizonalList;
