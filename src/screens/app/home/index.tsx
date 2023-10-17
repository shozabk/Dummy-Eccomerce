import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {ProductList} from '../../../common';
import {ProductCard, AppHeader} from '../.././../components';
import {SafeAreaView} from 'react-native-safe-area-context';
function HomeScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader />

      <View style={{marginTop: 40}}>
        <Text style={styles.subTitle}>THE LONG WAIT IS OVER</Text>
        <Text style={styles.title}>Winter Collection</Text>
      </View>

      {ProductList?.length > 0 ? (
        <FlatList
          numColumns={2}
          data={ProductList}
          renderItem={({item}: any) => {
            return <ProductCard product={item} />;
          }}
        />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 40,
    textAlign: 'center',
  },
  subTitle: {
    marginLeft: 42,
    fontSize: 16,
  },
});

export default HomeScreen;
