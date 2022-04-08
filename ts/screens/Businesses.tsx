import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Tile, SearchBar } from './components';
import type { Business } from './sharedTypes';
import { useFilteredBusinesses } from './utils/hooks';
import { theme, rgbaTheme } from '../appTheme';

const Businesses = () => {
  const { businesses, setSearchBusinessText } = useFilteredBusinesses();

  const _renderItem = ({ item }: { item: Business }) => (
    <Tile>
      <View style={styles.listItemContainer}>
        <View>
          <Text style={styles.businessName}>{item.name}</Text>
          <Text style={styles.city}>{item.location.city}</Text>
        </View>
        <Icon name="angle-right" size={25} color={theme.blue} />
      </View>
    </Tile>
  );

  const _renderItemSeparatorComponent = () => (
    <View style={styles.itemSeparatorComponent} />
  );

  return (
    <View style={{ backgroundColor: theme.white }}>
      <View style={styles.searchBarContainer}>
        <Text style={styles.instruction}>
          Select a business to view it's revenue
        </Text>
        <SearchBar placeholder="Search" setSearchText={setSearchBusinessText} />
      </View>
      <FlatList
        data={businesses}
        keyExtractor={(item: Business) => item.id.toString()}
        renderItem={_renderItem}
        ItemSeparatorComponent={_renderItemSeparatorComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  businessName: {
    fontSize: 17,
    color: theme.black,
  },
  contentContainerStyle: {
    padding: 8,
  },
  city: {
    color: rgbaTheme('0.7').black,
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
  },
  instruction: {
    fontSize: 17,
    color: theme.black,
    paddingBottom: 5,
  },
  itemSeparatorComponent: {
    height: 5,
    backgroundColor: 'transparent',
  },
  searchBarContainer: {
    padding: 8,
    backgroundColor: theme.white,
    borderBottomColor: theme.lightGray,
    borderBottomWidth: 1,
    shadowColor: theme.black,
    textShadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.5,
  },
});

export default Businesses;
