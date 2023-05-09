import React from "react";
import styles from "./Header.module.css";
import { CiMail } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = ({ counter }) => {

  return (
    <div>
      <div className={styles.blueLine}>Offer 30% on each Device gab it</div>
      <div className={styles.navbar}>
        <span>{counter}</span>
        <div className={styles.maindiv}>
          <h3>MyName</h3>
          <div>Oppp </div>
          <div>IPhone </div>
          <div>Samsung</div>
          <div>Red Me</div>
          <div>Xhaoumi</div>
          <input type="text" placeholder="Search" />
          <CiMail />
          <FaUserAlt />
          <Link to="myCart">
          <BsCart4 />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
