import { Business } from '../sharedTypes';
import data from '../../../data.json';
import { useState } from 'react';

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
