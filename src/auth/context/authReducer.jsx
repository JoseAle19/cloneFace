import { types } from "../types/types";
export const reducerUser = (state, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        data: action.payload,
        logged: true,
      };
    case types.logout:
      return {
        ...state,
        logged: false,
      };
    case types.getTests:
      return {
        ...state,
        tests: action.payload,
      };
    case types.addNewTest:
      return {
        ...state,
        tests: [...state.tests, action.payload],
      };
    default:
      return state;
  }
};
