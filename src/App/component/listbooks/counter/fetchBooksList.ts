import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



interface ListBooks {
    id: number;
	name: string;
	thumbnail: string;
	description: string;
	author: string;
    createdAt: string;
}

const initialState : ListBooks[] = []

export const productList = createSlice(
    {
        name: "fetchListBooks",
        initialState,
        reducers: {
           
        },
        extraReducers:  
        builder => builder.addCase(fetchListBooks.fulfilled, (state,action)=> {
            return state=action.payload
        })
    }
)

export const fetchListBooks = createAsyncThunk(
    "fetchListBooks/fetchListBooks",
    async ()=>{
        try{
            const res = await axios.get("https://65ad0b0dadbd5aa31bdff978.mockapi.io/api/books")
            return res.data;
        }catch (err) {
            console.log(err)
        }
    }
)





export default productList.reducer