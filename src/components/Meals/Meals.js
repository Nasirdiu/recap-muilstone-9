import React from "react";

import "./Meals.css";
const Meals = (props) => {
  const { strMeal, strMealThumb } = props.meal;
  return (
    <div className=" mt-3 bg-success rounded-3">
      <h6>{strMeal}</h6>
      <div className="img-container">
        <img className="img-fluid rounded-3" src={strMealThumb} alt="" />
      </div>
      <div>
        <button className="btn btn-info mt-4 mb-3 w-75">Add to cart </button>
      </div>
    </div>
  );
};

export default Meals;
