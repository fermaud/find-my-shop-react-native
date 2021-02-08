import { AUTHENTICATE, LOG_OUT, SET_DID_TRY_AL } from "../actions/auth";

const initialState = {
  token: null,
  userId: null,
  didTryAutoLogin: false
};

const authRecucer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        token: action.token,
        userId: action.userId
      };
    case SET_DID_TRY_AL:
      return {
        ...state,
        didTryAutoLogin: true
      };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default authRecucer;
