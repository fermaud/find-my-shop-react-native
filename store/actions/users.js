import axios from "axios";
import User from "../../models/user";
import ENV from "../../env";

export const SET_CONNECTED_USER = "SET_CONNECTED_USER";
export const UPDATE_CONNECTED_USER = "UPDATE_CONNECTED_USER";

export const fetchConnectedUser = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().auth.token;
      const response = await axios.get(ENV.API_BASE_URL + "user/connected", {
        headers: {
          Authorization: "JWT " + token
        }
      });
      if (!response.data.status) {
        console.log(response.data);
        return response.data;
      }
      const data = response.data.data;
      const user = new User(
        data._id,
        data.firstName,
        data.lastName,
        data.mail,
        data.thumbnailPathSignedUrl,
        data.created,
        data.isAdmin,
        data.isFirstConnection,
        data.isVerified,
        data.lastConnexion,
        data.plan,
        data.stripeUserId
      );
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
      const response = await axios.put(ENV.API_BASE_URL + "user/edit-connected-user", userInfos, {
        headers: {
          Authorization: "JWT " + token
        }
      });
      if (!response.data.status) {
        console.log(response.data);
        return response.data;
      }
      const data = response.data.data;
      const user = new User(
        data._id,
        data.firstName,
        data.lastName,
        data.mail,
        data.thumbnailPathSignedUrl,
        data.created,
        data.isAdmin,
        data.isFirstConnection,
        data.isVerified,
        data.lastConnexion,
        data.plan,
        data.stripeUserId
      );
      dispatch({ type: UPDATE_CONNECTED_USER, user: user });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
