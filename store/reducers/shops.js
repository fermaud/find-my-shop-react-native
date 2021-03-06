import { SET_SUGGESTED_SHOP, SET_SELECTED_SHOP, SET_SHOPS_ON_THE_MAP, SET_FOUNDED_SHOPS } from "../actions/shops";

const initialState = {
  selectedShop: {
    id: "",
    title: "",
    locality: "",
    coordinates: "",
    coverUrl: "",
    logoUrl: ""
  },
  suggestedShops: [],
  foundedShops: [],
  shopsOnTheMap: []
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
    case SET_SHOPS_ON_THE_MAP:
      return {
        ...state,
        shopsOnTheMap: action.shops
      };
    case SET_FOUNDED_SHOPS:
      return {
        ...state,
        foundedShops: action.shops
      };
    default:
      return state;
  }
};

export default shopsRecucer;
