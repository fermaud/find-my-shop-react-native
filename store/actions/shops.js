import axios from "axios";
import Shop from "../../models/shop";
import ENV from "../../env";

export const SET_SUGGESTED_SHOP = "SET_SUGGESTED_SHOP";
export const SET_SELECTED_SHOP = "SET_SELECTED_SHOP";
export const SET_SHOPS_ON_THE_MAP = "SET_SHOPS_ON_THE_MAP";
export const SET_FOUNDED_SHOPS = "SET_FOUNDED_SHOPS";

// Requests
const getShopsByQuery = (token, query) => {
  return axios.get(ENV.API_BASE_URL + "algolia-search/STORE" + query, {
    headers: {
      Authorization: "JWT " + token
    }
  });
};

const getShopById = (token, shopId) => {
  return axios.get(ENV.API_BASE_URL + "store/" + shopId, {
    headers: {
      Authorization: "JWT " + token
    }
  });
};
// Requests

const mapShop = (item) => {
  const mappedItem = new Shop(item._id, item.title, item.locality, item.coordinates, item.thumbnailCoverPathSignedUrl, item.thumbnailCompanyPathSignedUrl);
  return mappedItem;
};

export const fetchSuggestedShops = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().auth.token;
      const response = await getShopsByQuery(token, "?isOnline=true");
      if (!response.data.status) {
        console.log(response.data);
        throw new Error(response.data.message);
      }
      const data = response.data.data;
      const loadedShops = [];
      for (let item of data) {
        const shop = mapShop(item);
        loadedShops.push(shop);
      }
      dispatch({ type: SET_SUGGESTED_SHOP, shops: loadedShops });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const fetchShopById = (shopId) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().auth.token;
      const response = await getShopById(token, shopId);
      if (!response.data.status) {
        console.log(response.data);
        throw new Error(response.data.message);
      }
      const data = response.data.data;
      const shop = mapShop(data);
      dispatch({ type: SET_SELECTED_SHOP, shop: shop });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const fetchShopsFromLocation = (params) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().auth.token;
      const response = await getShopsByQuery(token, "?isOnline=true");
      if (!response.data.status) {
        console.log(response.data);
        throw new Error(response.data.message);
      }
      const data = response.data.data;
      let loadedShops = [];
      for (let item of data) {
        const shop = mapShop(item);
        loadedShops.push(shop);
      }
      loadedShops = loadedShops.filter((shop) => shop.coordinates && shop.coordinates.length === 2);
      dispatch({ type: SET_SHOPS_ON_THE_MAP, shops: loadedShops });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const fetchShopsByQuery = (params) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().auth.token;
      const response = await getShopsByQuery(token, "?isOnline=true" + params);
      if (!response.data.status) {
        console.log(response.data);
        throw new Error(response.data.message);
      }
      const data = response.data.data;
      const loadedShops = [];
      for (let item of data) {
        const newShop = mapShop(item);
        loadedShops.push(newShop);
      }
      dispatch({ type: SET_SHOPS_ON_THE_MAP, shops: loadedShops });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
