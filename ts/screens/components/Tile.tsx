import React, { ReactNode } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { colors } from '../../appTheme';

interface Props {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

const Tile = (props: Props) => (
  <View style={[styles.tile, props.containerStyle]}>{props.children}</View>
);

const styles = StyleSheet.create({
  tile: {
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: -1 },
    shadowOpacity: 0.2,
  },
});

export default Tile;
