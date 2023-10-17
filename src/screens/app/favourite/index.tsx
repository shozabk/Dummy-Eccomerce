import {SafeAreaView, StyleSheet, FlatList, View, Text} from 'react-native';
import {AppHeader} from '../../../components';
import {useSelector} from 'react-redux';
import {ProductCard} from '../../../components';

function FavouriteScreen(): JSX.Element {
  const favouriteProducts = useSelector(
    state => state.favourite.favouriteProducts,
  );

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader />
      <View style={{marginTop: 40}}>
        <Text style={styles.title}>Favourites</Text>
      </View>
      {favouriteProducts?.length > 0 ? (
        <FlatList
          numColumns={2}
          data={favouriteProducts}
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
});
export default FavouriteScreen;
