import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import data from '../data.json';
import { Tile } from './components';
import type { Business } from './sharedTypes';

const Businesses = () => {
  const _renderItem = ({ item }: { item: Business }) => (
    <Tile>
      <View style={styles.listItemContainer}>
        <Text>{item.name}</Text>
        <Icon name="angle-right" size={30} color="blue" />
      </View>
    </Tile>
  );

  const _renderItemSeparatorComponent = () => (
    <View style={styles.itemSeparatorComponent} />
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item: Business) => item.id.toString()}
      renderItem={_renderItem}
      ItemSeparatorComponent={_renderItemSeparatorComponent}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    margin: 8,
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemSeparatorComponent: {
    height: 5,
  },
});

export default Businesses;
