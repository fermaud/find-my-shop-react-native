import axios from "axios";
import Shop from "../../models/shop";
import ENV from "../../env";

export const SET_SUGGESTED_SHOP = "SET_SUGGESTED_SHOP";
export const SET_SELECTED_SHOP = "SET_SELECTED_SHOP";
export const SET_SHOPS_ON_THE_MAP = "SET_SHOPS_ON_THE_MAP";

export const fetchSuggestedShops = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(ENV.API_BASE_URL + "algolia-search/STORE?isOnline=true", {
        headers: {
          // "Content-Type": "application/json",
          Authorization: "JWT " + "514656465"
        }
      });
      if (!response.data.status) {
        console.log(response.data);
        return response.data;
      }
      const data = response.data.data;
      const loadedShops = [];
      for (let item of data) {
        const newShop = new Shop(item._id, item.title, item.locality, item.coordinates, item.thumbnailCoverPathSignedUrl, item.thumbnailCompanyPathSignedUrl);
        loadedShops.push(newShop);
      }
      dispatch({ type: SET_SUGGESTED_SHOP, shops: loadedShops });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const fetchShopById = (shopId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(ENV.API_BASE_URL + "store/" + shopId, {
        headers: {
          // "Content-Type": "application/json",
          Authorization: "JWT " + "514656465"
        }
      });
      if (!response.data.status) {
        console.log(response.data);
        return response.data;
      }
      const data = response.data.data;
      const newShop = new Shop(data._id, data.title, data.locality, data.coordinates, data.thumbnailCoverPathSignedUrl, data.thumbnailCompanyPathSignedUrl);
      dispatch({ type: SET_SELECTED_SHOP, shop: newShop });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const fetchShopsFromLocation = (location, params) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(ENV.API_BASE_URL + "algolia-search/STORE?isOnline=true", {
        headers: {
          // "Content-Type": "application/json",
          Authorization: "JWT " + "514656465"
        }
      });
      if (!response.data.status) {
        console.log(response.data);
        return response.data;
      }
      const data = response.data.data;
      let loadedShops = [];
      for (let item of data) {
        const newShop = new Shop(item._id, item.title, item.locality, item.coordinates, item.thumbnailCoverPathSignedUrl, item.thumbnailCompanyPathSignedUrl);
        loadedShops.push(newShop);
      }
      loadedShops = loadedShops.filter((shop) => shop.coordinates && shop.coordinates.length === 2);
      dispatch({ type: SET_SHOPS_ON_THE_MAP, shops: loadedShops });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
