
import type { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  List: undefined;
  Detail: { title: string };
};


export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }