import React from "react";
import { Route, Routes } from "react-router-dom";
import History from "../Pages/History";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../Pages/LoginPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <History />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AllRoutes;
