import React from "react";
import styles from "./MyCart.module.css";
import { useState } from "react";
const MyCart = ({ selectedData }) => {
let maped=selectedData.map((item)=>item.price);
let totalPrice=maped.reduce((a,b)=>a+b)
console.log(totalPrice);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>This Is Your Cart </h1>
      <h1 style={{textAlign:"end",color:"red"}}>Your Grand Total:-{totalPrice}</h1>
      {selectedData.map((item, index) => {
        return (
          <div key={index} className={styles.maindiv}>
   
            <div className={styles.imagedescription}>
              <img src={item.image} className={styles.mobileimage} />
              <div className={styles.discription}>
                <p>Discription:-{item.description}</p>
                <h3>Model:-{item.title}</h3>
                <p style={{color:"green",fontSize:"40px"}}>Price:-${item.price}</p>
              </div>
            </div>
          </div>
        );
      })}
      
    </div>
  );
};
export default MyCart;
