import { SET_CONNECTED_USER, UPDATE_CONNECTED_USER } from "../actions/users";

const initialState = {
  connectedUser: {}
};

const usersRecucer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONNECTED_USER:
      return {
        ...state,
        connectedUser: action.user
      };
    case UPDATE_CONNECTED_USER:
      return {
        ...state,
        connectedUser: action.user
      };
    default:
      return state;
  }
};

export default usersRecucer;
