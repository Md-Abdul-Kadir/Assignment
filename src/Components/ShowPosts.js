import React from "react";
import "./style.css";

const ShowPosts = (props) => {
  const { name, img, price, stock, seller, features } = props.posts;
  console.log(features);
  return (
    <div>
      <div className="product d-flex my-3">
        <div className="pd-5 w-25 my-2 ">
          <img src={img} alt="" />
        </div>
        <div className="pd-5 w-75 my-4">
          <h5 className="product-name left-align">{`${name.substring(0, 70)}`}</h5>
          <p className="left-align">by: {seller} </p>
          <div className="product-info">
            <div className="left-align">
              <h4 className="text-danger">${price}</h4>
              <p>Only {stock} left in stock-order soon</p>

              <button className="add-to-cart-btn btn-primary">
                Add to cart
              </button>
            </div>
            <div className="ps-5 pt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPosts;
