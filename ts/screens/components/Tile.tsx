import React, { ReactNode } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import appTheme from '../../appTheme';

interface Props {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

const Tile = (props: Props) => (
  <View style={[styles.tile, props.containerStyle]}>{props.children}</View>
);

const styles = StyleSheet.create({
  tile: {
    backgroundColor: appTheme.white,
    borderRadius: 8,
    shadowColor: appTheme.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
});

export default Tile;
