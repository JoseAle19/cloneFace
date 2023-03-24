import { useReducer } from "react";
import { reducerUser } from "./authReducer";
import { AuthContext } from "./AuthContext";
import { types } from "../types/types";
import { getTestApi } from "../../quizApp/services/getTests";
import { useNavigate } from "react-router-dom";
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: user ? true : false,
    data: user ? user : null,
    tests: [],
  };
};
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerUser, {}, init);
const navigate = useNavigate()
  const login = (dataUser) => {
    dispatch({
      type: types.login,
      payload: dataUser,
    });
    localStorage.setItem("user", JSON.stringify(dataUser));
  };
  const logOut = () => {
    localStorage.removeItem("user");
    navigate('/', {replace: true})
    dispatch({
      type: types.logout,
    });
  };

  const getTests = async () => {
    const dataTest = await getTestApi();
    dispatch({
      type: types.getTests,
      payload: dataTest.data.Tests,
    });
  };

  const addNewTest = (dataTest) => {
    // getTests();
    dispatch({
      type: types.addNewTest,
      payload: dataTest,
    });
  };

  return (
    <AuthContext.Provider value={{ state, login, logOut, getTests, addNewTest }}>
      {children}
    </AuthContext.Provider>
  );
};
