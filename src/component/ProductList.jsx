import React from "react";
import { useState } from "react";
import styles from "./ProductList.module.css"
const ProductList = ({ data,inc,dec }) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles.maindiv}>
            <img
              src={item.images[0]}
              alt="MobileIMage"
              className={styles.mainimage}
            />
            <div className={styles.textdiv}>
              <p>Title:-{item.title}</p>
              <p>Price:-${item.price}</p>
              <p>Rating:-{item.rating}</p>
              <div className={styles.buttons}>
                <button onClick={() => inc(index)}>-</button>
                <h3>{item.count}</h3>
                <button onClick={() => dec(index)}>+</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
