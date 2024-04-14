import styles from "./styles.module.css";
import Left from "./../../Left";
import Balance from "./../../Balance";
import History from "./../../History";
import AddTransaction from "./../../AddTransaction";
import "./../../Style.css";
import Context from "./../../Context";
import React, { useState } from "react";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const [Array, SetArray] = useState([]);
  return (
    <div>
      <div className={styles.main_container}>
        <nav className={styles.navbar}>
          <h1>fakebook</h1>
          <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </div>
      <div>
        <h2 className="tracker-container">Expense Tracker</h2>
        <Context.Provider value={{ Fetch: Array, Set: SetArray }}>
          <Left />
          <Balance />
          <History />
          <AddTransaction />
        </Context.Provider>
      </div>
    </div>
  );
};

export default Main;
