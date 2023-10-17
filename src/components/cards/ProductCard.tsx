import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Icons} from '../../common';
import {useDispatch, useSelector} from 'react-redux';
import {AddToFavourite, RemoveFavourite} from '../../redux/FavouriteSlice';
import type {Product} from '../../types';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({product}) => {
  const dispatch = useDispatch();

  const favouriteProducts = useSelector(
    state => state.favourite.favouriteProducts,
  );

  const isFavourite = favouriteProducts.find(
    (item: Product) => item.id == product.id,
  );

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          source={{
            uri: product?.imageUrl,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.productDetailContainer}>
        <Text style={styles.productName}>{product?.name}</Text>
        {isFavourite ? (
          <TouchableOpacity onPress={() => dispatch(RemoveFavourite(product))}>
            <Icons.AntDesign
              name="heart"
              size={15}
              color="red"
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => dispatch(AddToFavourite(product))}>
            <Icons.AntDesign
              name="hearto"
              size={15}
              color="gray"
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    marginVertical: '5%',
    marginHorizontal: '5%',
    shadowColor: '#000',
    borderRadius: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: '#fff',
  },
  image: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
  },
  productName: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 16,
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
  },

  productDetailContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  imageBox: {
    width: 150,
    height: 150,
  },
});

export default ProductCard;
