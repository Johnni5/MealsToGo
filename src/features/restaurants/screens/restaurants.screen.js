import React from 'react';
import { Searchbar } from 'react-native-paper';
import { Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { RestaurantInfo } from '../components/restaurant-info.component';

export const RestaurantsScreen = () => (
  <>
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    backgroundColor: 'green',
    padding: 16,
  },
  list: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
  },
});
