import React from 'react';
import { Text } from 'react-native';

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = [<icon></icon>],
    photos = [
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.AFvhjAtUsIlRVe0gPWS0mwHaE8%26pid%3DApi&f=1&ipt=358760bb09ea6f59dab2df0e9ed85a941397a74c5274fcaa02bd55ea8eedd99f&ipo=images',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return <Text>{name}</Text>;
};
