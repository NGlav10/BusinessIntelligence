import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

import data from '../data.json';
import { Tile } from './components';
import type { Business } from './sharedTypes';

const Businesses = () => {
  const _renderItem = ({ item }: { item: Business }) => (
    <Tile>
      <Text>{item.name}</Text>
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
  itemSeparatorComponent: {
    height: 5,
  },
});

export default Businesses;
