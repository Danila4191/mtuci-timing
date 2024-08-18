import React from "react";
import styles from "./layout.module.css";
import AppHeader from "../app-header/app-header";
import { Outlet } from "react-router-dom";
import background from "../../images/background-default.png";

function Layout() {
  return (
    <div>
      <AppHeader />
      <main
        className={styles.main}
        style={{ backgroundImage: `url(${background})` }}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
