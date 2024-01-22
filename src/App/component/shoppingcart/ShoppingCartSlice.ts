import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ListBooks {
    id: number;
	name: string;
	thumbnail: string;
	description: string;
	author: string;
    createdAt: string;
}

const initialState :ListBooks[] = []

export const shoppingCartSlice = createSlice(
    {
        name:"shoppingCart",
        initialState,
        reducers: {
            addToCart:(state , action :PayloadAction<ListBooks> ) => {
                const product = action.payload ;
                
                return [...state,product]
                
            }
        },
        
    }
)




export const {addToCart} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer