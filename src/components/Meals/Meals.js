import React from "react";

import "./Meals.css";
const Meals = (props) => {
  const { strMeal, strMealThumb } = props.meal;
  return ( 
    <div className="meals-container mt-3">
      <h6>{strMeal}</h6>
      <img src={strMealThumb} alt="" />
      <div>
      <button className="btn btn-info mt-2">Add to cart </button>
      </div>
    </div>
  );
};

export default Meals;
