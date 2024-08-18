import React from "react";
import styles from "./app-header.module.css";


function AppHeader() {
  return (
    <header className={`${styles.header}`}>
      <div className={` ${styles.header__container}`}>
        <svg className={styles.logo} />
      </div>
    </header>
  );
}
export default AppHeader;
