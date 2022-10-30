import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {ADD_SHIPPING, ADD_TO_CART, REMOVE_ITEM, RESET_CART} from '../actions/cartActionTypes.js';
import {paintings} from "../../paintings/paintings.js";

const initState = {
  products: paintings,
  addedItems: [],
  total: 0,
  shipping: 0
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    const addedItem = state.products.find(item => item.id === action.id);
    const existed_item = state.addedItems.find(item => action.id === item.id);
    if (!existed_item) {
      addedItem.quantity = 1;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: state.total + addedItem.price
      };
    }
  }

  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price;

    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      shipping: state.shipping += 6
    };
  }

  if (action.type === 'SUB_SHIPPING') {
    return {
      ...state,
      shipping: state.shipping -= 6
    };
  }

  if (action.type === RESET_CART) {
    return {
      ...state,
      addedItems: [],
      total: 0,
      shipping: 0
    };
  }
  return state;
};

export const initStore = (initialState = initState) => {
  return createStore(
    cartReducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  );
};
