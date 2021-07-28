import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {ADD_SHIPPING, ADD_TO_CART, REMOVE_ITEM, RESET_CART} from '../actions/cartActionTypes';

const initState = {
  products: [
    {
      id: 1,
      title: "Pencil",
      price: 99,
      image: "/images/shop-image/1.jpg"
    },
    {
      id: 2,
      title: "T-Shirt",
      price: 120,
      image: "/images/shop-image/2.jpg"
    },
    {
      id: 3,
      title: "Casual Shoe",
      price: 160,
      image: "/images/shop-image/3.jpg"
    },
    {
      id: 4,
      title: "Drop Side Watch",
      price: 130,
      image: "/images/shop-image/4.jpg"
    },
    {
      id: 5,
      title: "Chair",
      price: 90,
      image: "/images/shop-image/5.jpg"
    },
    {
      id: 6,
      title: "Card",
      price: 180,
      image: "/images/shop-image/6.jpg"
    },
    {
      id: 7,
      title: "Book Cover",
      price: 330,
      image: "/images/shop-image/7.jpg"
    },
    {
      id: 8,
      title: "Wall Watch",
      price: 140,
      image: "/images/shop-image/8.jpg"
    },
    {
      id: 9,
      title: "Drop Side Watch",
      price: 430,
      image: "/images/shop-image/9.jpg"
    },
    {
      id: 10,
      title: "Camera Stand",
      price: 650,
      image: "/images/shop-image/9.jpg"
    },
    {
      id: 11,
      title: "Drop Side Watch",
      price: 230,
      image: "/images/shop-image/5.jpg"
    },
    {
      id: 12,
      title: "Drop Side Watch",
      price: 670,
      image: "/images/shop-image/7.jpg"
    }
  ],
  addedItems: [],
  total: 0,
  shipping: 0
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.products.find(item => item.id === action.id);
    let existed_item = state.addedItems.find(item => action.id === item.id);
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
  } else {
    return state;
  }
};

export const initStore = (initialState = initState) => {
  return createStore(
    cartReducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  );
};
