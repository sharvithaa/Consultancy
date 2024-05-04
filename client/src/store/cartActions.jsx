import * as actionTypes from "./actionType";

export const addToCart = (item) => {
  return {
    type: actionTypes.ADD_TO_CART,
    item: item,
  };
};

export const removeFromCart = (id) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    id: id,
  };
};
