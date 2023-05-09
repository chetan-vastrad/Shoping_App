import React from "react";
import Header from "./Header";
import { useState } from "react";
import ProductList from "./ProductList";
const MainComponent =({myData,increment,decrement,counter}) =>{
 

    return (
        <div>
           <Header myData={myData} counter={counter}/>
           <ProductList data={myData} inc={increment} dec={decrement}/>
        </div>
    )
}
export default MainComponent;