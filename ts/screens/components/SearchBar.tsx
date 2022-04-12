import React from 'react';

import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, fontFamily } from '../../appTheme';

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
    marginBottom: 5,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
  },
  searchIcon: {
    width: 20,
  },
  searchText: {
    fontFamily: fontFamily.light,
    fontSize: 20,
    alignSelf: 'center',
    color: colors.black,
    paddingVertical: 8,
    marginLeft: 5,
    textAlignVertical: 'center',
  },
});
export default SearchBar;
