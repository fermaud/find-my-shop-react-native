import axios from "axios";
import User from "../../models/user";
import ENV from "../../env";

export const SET_CONNECTED_USER = "SET_CONNECTED_USER";
export const UPDATE_CONNECTED_USER = "UPDATE_CONNECTED_USER";

// Requests
const getConnectedUser = (token) => {
  return axios.get(ENV.API_BASE_URL + "user/connected", {
    headers: {
      Authorization: "JWT " + token
    }
  });
};

const updateConnectedUser = (token, userInfos) => {
  return axios.put(ENV.API_BASE_URL + "user/edit-connected-user", userInfos, {
    headers: {
      Authorization: "JWT " + token
    }
  });
};
// Requests

const mapUser = (item) => {
  const mappedItem = new User(
    item._id,
    item.firstName,
    item.lastName,
    item.mail,
    item.thumbnailPathSignedUrl,
    item.created,
    item.isAdmin,
    item.isFirstConnection,
    item.isVerified,
    item.lastConnexion,
    item.plan,
    item.stripeUserId
  );
  return mappedItem;
};

export const fetchConnectedUser = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().auth.token;
      const response = await getConnectedUser(token);
      if (!response.data.status) {
        console.log(response.data);
        throw new Error(response.data.message);
      }
      const data = response.data.data;
      const user = mapUser(data);
      dispatch({ type: SET_CONNECTED_USER, user: user });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const updateConnectedUserProfile = (userInfos) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().auth.token;
      const response = await updateConnectedUser(token, userInfos);
      if (!response.data.status) {
        console.log(response.data);
        throw new Error(response.data.message);
      }
      const data = response.data.data;
      const user = mapUser(data);
      dispatch({ type: UPDATE_CONNECTED_USER, user: user });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
