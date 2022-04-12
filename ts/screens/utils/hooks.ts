import { Business, Revenue } from '../../sharedTypes';
import data from '../../../data.json';
import { useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

interface ReturnType {
  businesses: Business[];
  setSearchBusinessText: (searchBusinessText: string) => void;
}

export const useFilteredBusinesses = (): ReturnType => {
  const [searchBusinessText, setSearchBusinessText] = useState<string>('');

  let businesses = data;

  if (searchBusinessText) {
    businesses = businesses.filter((business: Business) =>
      business.name.includes(searchBusinessText),
    );
  }

  return {
    businesses,
    setSearchBusinessText,
  };
};

export const useConstructChartValues = (
  revenueArray: Revenue[],
): {
  xValues: string[];
  yValues: number[];
} =>
  useMemo(() => {
    const xValues: string[] = [];
    const yValues = revenueArray.map((revenue) => {
      xValues.push(revenue.date);
      return revenue.value;
    });

    return { xValues, yValues };
  }, [revenueArray]);

export const useUpdateHeaderTitle = (title: string) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: `${title}` });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);
};
