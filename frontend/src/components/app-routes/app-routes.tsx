import React from "react";
import styles from "./app-routes.module.css";
import { Routes } from "react-router";
import { Route } from "react-router";
import Layuot from "../layout/layout";
import Week from "../../pages/week/week";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layuot />}>
        <Route path="/week" element={<Week/>} />
      </Route>
      <Route path="*" element={<div></div>} />
    </Routes>
  );
}

export default AppRoutes;
