import React from 'react';

import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme, rgbaTheme } from '../../appTheme';

interface Props {
  placeholder: string;
  setSearchText: (searchText: string) => void;
}

const SearchBar = (props: Props) => {
  const { placeholder, setSearchText } = props;

  return (
    <View style={styles.searchBar}>
      <Icon name="search" size={20} color={theme.gray} style={{ width: 20 }} />
      <TextInput
        placeholder={placeholder}
        onChangeText={(text) => props.setSearchText(text)}
        style={styles.searchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: theme.lightGray,
    padding: 8,
    marginBottom: 5,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    fontSize: 18,
    marginLeft: 5,
  },
});
export default SearchBar;
