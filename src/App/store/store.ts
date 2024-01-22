import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../component/listbooks/counter/counterSlice";
import fetchProductListSlice from "../component/listbooks/counter/fetchBooksList"
import shoppingCartSlice from "../component/shoppingcart/ShoppingCartSlice";
import  fetchNewBook  from "../component/createForm/createNewBookSlice";

export const store = configureStore(
    {
        reducer: {
            counter : counterSlice,
            shoppingCart: shoppingCartSlice,
            fetchProductList: fetchProductListSlice,
            fetchNewBook: fetchNewBook

          },
          
    }
)


export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch




