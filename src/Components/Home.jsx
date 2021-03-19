import React, { Component } from 'react';
import "../AllCss.css"
const Home = (props) => {
    console.log("props from Home Component",props);
    // console.log(props.src);
    
    return (
        <>
            <div className=" display-div">
                <img className="Image" src={props.src} alt="Mobile Image" title="Mobile Image" />
                <div className="cart-display-div">
                    <label className="pname"><b>Name is : </b>{props.name}</label><br></br>
                    <label className="pname"><b>Price is : </b>{props.price}</label>
                    <input onClick={props.cart} className="cart-btn" type="button" value="Add To Card" title="Add To Cart"/>
                </div>
            </div>
        </>)
}
export default Home;

