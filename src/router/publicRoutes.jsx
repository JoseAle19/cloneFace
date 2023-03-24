import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ children }) => {
  const { state } = useContext(AuthContext);
  const { logged } = state;

if (state.data?.user.idrol === 1  && logged) return <Navigate to={'student'}/>;
if (state.data?.user.idrol === 2  && logged) return <Navigate to={'teacher'}/>;
if (state.data?.user.idrol === 3  && logged) return <Navigate to={'admin'}/>;
return children;
};
