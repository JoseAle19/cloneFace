import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/Login";
import { PrivateRoutes } from "./PrivateRoutes";
import { AuthContext } from "../auth/context/AuthContext";
import { QuizRoutes } from "../quizApp/routes/QuizRoutes";
import { PublicRoutes } from "./publicRoutes";
export const AppRouter = () => {
  const { logOut } = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <QuizRoutes />
            </PrivateRoutes>
          }
        />

        <Route
          path="/"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
      </Routes>
    </>
  );
};
