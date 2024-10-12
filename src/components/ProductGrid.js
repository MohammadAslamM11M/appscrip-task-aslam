import React from "react";
import { FaHeart } from "react-icons/fa";
import "../styles/ProductGrid.css";

const ProductGrid = ({ products }) => {
  return (
    <div className="gridStyle">
      {products.map((product) => (
        <div key={product.id} className="cardStyle">
          <img src={product.image} alt={product.title} className="imageStyle" />
          <p className="productTitle">{product.title}</p>
          <p className="signInMessage">
            Sign in or Create an account to see pricing
            <img
              src="/addToWishlistIcon.png"
              alt="add to wishlist icon"
              style={{ width: "16px", height: "16px" }}
            />
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
