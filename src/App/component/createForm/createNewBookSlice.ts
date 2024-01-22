import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



 interface StyleNewBook {
	name: string;
	thumbnail: string;
	description: string;
	author: string;
    createdAt: string;
}

const initialState : StyleNewBook[] = []

export const fetchNewBook = createSlice(
    {
        name: "fetchNewBook",
        initialState,
        reducers: {
           
        },
       
    }
)


export const postNewBook = createAsyncThunk(
    "fetchNewBook/postNewBook",
    async(newBook : StyleNewBook)=>{
        try {
            const Book = {...newBook, expiredAt: new Date()}
        const res = await axios.post("https://65ad0b0dadbd5aa31bdff978.mockapi.io/api/books", Book)

            console.log("update",res.data);
            
        } catch (err) {
            console.log(err)
        }
    }
)



export default fetchNewBook.reducer