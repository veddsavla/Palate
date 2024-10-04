import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-img"
          src={image || "/path/to/default-image.png"}
          alt={name || "Unnamed Dish"}
        />
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name || "Unknown Name"}</p>
          <img src={assets.rating_starts} alt="rating stars" />
        </div>
        <p className="food-item-desc">
          {description || "Description not available"}
        </p>
        <p className="food-item-price">₹{price || "N/A"}</p>
      </div>
    </div>
  );
};

export default FoodItem;
