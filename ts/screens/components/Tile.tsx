import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../../appTheme';

interface Props {
  children: ReactNode;
}

const Tile = (props: Props) => (
  <View style={styles.tile}>{props.children}</View>
);

const styles = StyleSheet.create({
  tile: {
    backgroundColor: theme.white,
    borderRadius: 8,
    shadowColor: theme.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
});

export default Tile;
