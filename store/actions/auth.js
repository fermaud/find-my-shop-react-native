import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import ENV from "../../env";

export const AUTHENTICATE = "AUTHENTICATE";
export const LOG_OUT = "LOG_OUT";
export const SET_DID_TRY_AL = "SET_DID_TRY_AL";

let timer;

export const setDidTryAL = () => {
  return { type: SET_DID_TRY_AL };
};

export const authenticate = (userId, token, expiryTime) => {
  return (dispatch) => {
    dispatch(setLogoutTimer(expiryTime));
    dispatch({ type: AUTHENTICATE, userId: userId, token: token });
  };
};

export const facebookAuth = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(ENV.API_BASE_URL + "user/register-or-login-from-facebook", userData);
      if (!response.data.status) {
        console.log(response.data);
        return response.data;
      }
      const data = response.data.data;
      // 365 days in milliseconds
      const expirationTime = 365 * 24 * 3600 * 1000;
      dispatch(authenticate(data.userId, data.token, expirationTime));

      const expirationDate = new Date(new Date().getTime() + expirationTime);
      saveDataToStorage(data.userId, data.token, expirationDate);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const logOut = () => {
  clearLogoutTimer();
  AsyncStorage.removeItem("userData");
  return { type: LOG_OUT };
};

const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

const setLogoutTimer = (expirationTime) => {
  return (dispatch) => {
    timer = setTimeout(() => {
      dispatch(logOut());
    }, expirationTime);
  };
};

const saveDataToStorage = (userId, token, expirationDate) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      userId: userId,
      token: token,
      expiryDate: expirationDate.toISOString()
    })
  );
};
