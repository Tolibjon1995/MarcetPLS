import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import base from "../../api/base";

export const post_card = createAsyncThunk(
    "productSlice/post_product",
    async function (data, { rejectWithValue, dispatch }) {
        try {
            let res = await base.post(`/customer/cart`,{
                "product_id": data.id,
                "quantity": 1
            })

            if (res.status == 200 || res.status === 201) {
                
                return dispatch(addcard(res))
            }

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const get_card = createAsyncThunk(
    "productSlice/get_product",
    async function (url, { rejectWithValue, dispatch }) {
        try {
            let res = await base.get(url)

            if (res.status == 200 || res.status === 201) {
                console.log(res);
                return dispatch(getcard(res))
            }

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)



export const customer = createSlice({
    name: "productSlice",
    initialState: {
        postcardProduct:{
            status: null,
        },
        getcardProduct:{
            cards:[],
            status: null,
            error:null
        }

    },
    reducers: {
        addcard: (state, action) => {
            state.postcardProduct.status = action.payload.status
        },
        getcard: (state, action) => {
            state.getcardProduct.cards = action.payload.data.carts
            state.getcardProduct.status = action.payload.status
            state.getcardProduct.error = action.payload.error
        },

    },
    extraReducers: {
        [post_card.pending]: (state) => {
            state.product.status = 'pending'
            state.product.error = null
        },
    }
})


export const { addcard,getcard } = customer.actions

export default customer.reducer