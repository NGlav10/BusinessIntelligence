import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import appTheme from '../appTheme';
import { RootStackParamList } from '../navigationTypes';
import { Revenue } from '../sharedTypes';
import { Tile } from './components';

type BusinessDetailScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

const BusinessDetail = () => {
  const {
    params: {
      business: {
        name,
        location: { address, city, country },
        revenue,
      },
    },
  } = useRoute<BusinessDetailScreenRouteProp>();

  const _renderMonthlyRevenue = () => {
    const _renderItem = ({ item }: { item: Revenue }) => (
      <View style={styles.revenueContainer}>
        <Text>{item.date}</Text>
        <Text>{item.value}</Text>
      </View>
    );

    const _renderItemSeparatorComponent = () => (
      <View style={styles.itemSeparatorComponent} />
    );

    return (
      <FlatList
        data={revenue}
        keyExtractor={(monthlyRevenue: Revenue) =>
          monthlyRevenue.seq.toString()
        }
        renderItem={_renderItem}
        ItemSeparatorComponent={_renderItemSeparatorComponent}
        scrollEnabled={false}
      />
    );
  };

  return (
    <ScrollView>
      <Tile containerStyle={styles.tileContainerStyle}>
        <Text style={styles.businessName}>{name}</Text>
        <Text>{address}</Text>
        <Text>{city}</Text>
        <Text>{country}</Text>
      </Tile>
      {_renderMonthlyRevenue()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  businessName: {
    fontSize: 25,
    paddingBottom: 8,
  },
  itemSeparatorComponent: {
    height: 1,
    backgroundColor: 'transparent',
  },
  revenueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: appTheme.white,
  },
  tileContainerStyle: {
    padding: 15,
    margin: 15,
  },
});

export default BusinessDetail;
