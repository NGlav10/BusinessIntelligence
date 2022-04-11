import React from 'react';

import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../appTheme';

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
        color={colors.gray}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        onChangeText={(text) => setSearchText(text)}
        style={styles.searchText}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: colors.lightGray,
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
    color: colors.black,
  },
});
export default SearchBar;
