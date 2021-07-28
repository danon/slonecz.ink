import {ADD_TO_CART, REMOVE_ITEM, RESET_CART} from './cartActionTypes';

export const resetCart = () => ({type: RESET_CART});
export const addToCart = (id) => ({type: ADD_TO_CART, id});
export const removeItem = (id) => ({type: REMOVE_ITEM, id});
