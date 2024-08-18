import React from "react";
import styles from "./app.module.css";
import AppRoutes from "../app-routes/app-routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
