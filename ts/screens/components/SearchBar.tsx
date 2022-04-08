import React from 'react';

import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import appTheme from '../../appTheme';

interface Props {
  placeholder: string;
  setSearchText: (searchText: string) => void;
}

const SearchBar = (props: Props) => {
  const { placeholder, setSearchText } = props;

  return (
    <View style={styles.searchBar}>
      <Icon
        name="search"
        size={20}
        color={appTheme.gray}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder={placeholder}
        onChangeText={(text) => setSearchText(text)}
        style={styles.searchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: appTheme.lightGray,
    padding: 8,
    marginBottom: 5,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: 20,
  },
  searchText: {
    fontSize: 18,
    marginLeft: 5,
  },
});
export default SearchBar;
