import { SET_SUGGESTED_SHOP, SET_SELECTED_SHOP } from "../actions/shops";

const initialState = {
  selectedShop: {
    id: "",
    title: "",
    locality: "",
    coordinates: "",
    coverUrl: "",
    logoUrl: ""
  },
  suggestedShops: []
};

const shopsRecucer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUGGESTED_SHOP:
      return {
        ...state,
        suggestedShops: action.shops
      };
    case SET_SELECTED_SHOP:
      return {
        ...state,
        selectedShop: action.shop
      };
    default:
      return state;
  }
  return state;
};

export default shopsRecucer;
