import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  children: ReactNode;
}

const Tile = (props: Props) => (
  <View style={styles.tile}>{props.children}</View>
);

const styles = StyleSheet.create({
  tile: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.1,
  },
});

export default Tile;
