import { Business } from './sharedTypes';

export type RootStackParamList = {
  Home: undefined;
  Profile: { business: Business };
};
