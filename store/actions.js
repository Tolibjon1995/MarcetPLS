import Axios from 'axios';
import * as types from './types';
import base from '../api/base';

export const setQuote = (payload) => ({ type: types.GET_CARD, payload });

// GET QUOTE OF THE DAY
export const postCard = (data) => (dispatch, getState) => {
    base.post(`/customer/cart`, {
        "product_id": data.id,
        "quantity": 1
    })
};
export const getCard = () => (dispatch, getState) => {
    base.get(`/customer/cart`).then((res)=>{
        
        dispatch(setQuote({ cards: res.data.carts }));
        const state = getState();
        console.log(state);
        // return({
        //     type: types.GET_CARD,
        //     payload: res.data.carts
        // })
    })
};

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT });

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT });

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET });