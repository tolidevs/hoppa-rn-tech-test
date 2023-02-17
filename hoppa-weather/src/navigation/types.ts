
import type { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  List: undefined
  Detail: DetailScreenNavProps
}

export type DetailScreenNavProps = {
    title: string,
    imageUri: string,
    headLine: string,
    min: number,
    max: number
    rain: number
}

export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }