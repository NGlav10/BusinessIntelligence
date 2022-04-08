import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import appTheme from '../appTheme';
import { RootStackParamList } from '../navigationTypes';
import { Revenue } from '../sharedTypes';
import { Tile } from './components';
import { formatCurrencyUSD } from './utils/currencyUtils';
import { formatDate } from './utils/dateUtils';

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

  const _renderHeaderComponent = () => (
    <Tile containerStyle={styles.tileContainerStyle}>
      <Text style={styles.businessName}>{name}</Text>
      <Text>{address}</Text>
      <Text>{city}</Text>
      <Text>{country}</Text>
    </Tile>
  );

  const _renderItem = ({ item, index }: { item: Revenue; index: number }) => {
    const formattedDate = formatDate(item.date);
    const formattedValue = formatCurrencyUSD(item.value);

    const previousMonthRevenue = revenue[index - 1]?.value ?? 0;
    const isPreviousMonthRevenueIncrease = previousMonthRevenue < item.value;
    const iconNameAndColor = isPreviousMonthRevenueIncrease
      ? { name: 'up', color: 'green' }
      : { name: 'down', color: 'red' };

    return (
      <View style={styles.revenueContainer}>
        <Text>{formattedDate}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>{formattedValue}</Text>
          <Icon
            name={`angle-double-${iconNameAndColor.name}`}
            color={iconNameAndColor.color}
            size={20}
            style={styles.revenueIcon}
          />
        </View>
      </View>
    );
  };

  const _renderItemSeparatorComponent = () => (
    <View style={styles.itemSeparatorComponent} />
  );

  return (
    <FlatList
      data={revenue}
      keyExtractor={(monthlyRevenue: Revenue) => monthlyRevenue.seq.toString()}
      renderItem={_renderItem}
      ItemSeparatorComponent={_renderItemSeparatorComponent}
      ListHeaderComponent={_renderHeaderComponent}
    />
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
  revenueIcon: {
    paddingLeft: 5,
  },
  tileContainerStyle: {
    padding: 15,
    margin: 10,
  },
});

export default BusinessDetail;
