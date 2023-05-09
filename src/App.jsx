import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MainComponent from "./component/MainComponent";
import MyCart from "./component/MyCart";
const App = () => {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [mainCart, setMainCart] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      let product = res.data.products;
      product.forEach((product) => {
        product.count = 0;
      });
      setData(product);
    });
  }, []);
  const addButtonHandler = (index) => {
    //onclick button increment will happne
    let temp = [...data];
    temp[index].count = temp[index].count + 1;
    setData(temp);
    //onclick data will revert on cart
    let temp2 = [...data];
    let maped = temp2.map((item) => item.count);
    let red = maped.reduce((a, b) => a + b);
    setCartData(red);
    //onclick button image,price,should be shown
     let temp3=[...data]
     console.log(temp3);
     const obj={image:temp3[index].images[0],
                title:temp3[index].title,
                price:temp3[index].price,
                description:temp3[index].description}
    setMainCart((pre)=>{
      return [...pre,obj]
    })
    
  };
  const minusButtonHandler = (index) => {
    //onclick button decrement will happne
    let temp = [...data];
    if (temp[index].count > 0) {
      temp[index].count = temp[index].count - 1;
    }
    setData(temp);
    //onclick data will revert on cart
    let temp2 = [...data];
    let maped = temp2.map((item) => item.count);
    let red = maped.reduce((a, b) => a + b);
    setCartData(red);
    //onclick mainCart data image and price decrease
    let temp3=[...mainCart]
    let filtered=temp3.filter((ind,item)=>item!=index)
    setMainCart(filtered)
  

  };
  // console.log("main", mainCart);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainComponent
              myData={data}
              counter={cartData}
              increment={minusButtonHandler}
              decrement={addButtonHandler}
            />
          }
        />
        <Route path="mycart" element={<MyCart selectedData={mainCart} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
