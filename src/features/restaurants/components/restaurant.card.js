import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const RestaurantCard = () => (
  <Card>
    <Card.Content>
      <Text variant="titleLarge">Some Restaurant</Text>
    </Card.Content>
    <Card.Cover source={{ uri: '' }} />
  </Card>
);

export default RestaurantCard;
