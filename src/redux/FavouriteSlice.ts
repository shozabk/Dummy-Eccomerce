import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../types';

const initialState = {
  favouriteProducts: [],
};

export const FavouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    AddToFavourite: (state: any, action: Product) => {
      state.favouriteProducts.push(action.payload);
    },

    RemoveFavourite: (state: any, action: Product) => {
      state.favouriteProducts = state.favouriteProducts.filter(
        item => item.id != action.payload.id,
      );
    },
  },
});

export const {AddToFavourite, RemoveFavourite} = FavouriteSlice.actions;

export default FavouriteSlice.reducer;
