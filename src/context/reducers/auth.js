import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_LOADING,
  LOGIN_ERROR,
  LOGIN_SUCCESS
} from "../../constants/actionsTypes";

const auth = (state, { type, payload }) => {
  switch (type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: true,
          error: false
        }
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          data: payload
        }
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: payload
        }
      };
    default:
      return state;
  }
};

export default auth;
