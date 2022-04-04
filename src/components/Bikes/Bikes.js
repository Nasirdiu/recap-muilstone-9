import React from "react";
import "./Bikes.css";
const Bikes = (props) => {
  const { name, img, price } = props.bike;
  return (
    <div className=" col-md-4 bg-dark">
      <div className="m-2 bg-info rounded-3 pb-3">
        <div className="img-container">
          <img className="img-fluid rounded-3" src={img} alt="" />
        </div>
        <h1 className="text-light">{name}</h1>
        <p className="text-light">Price:${price}</p>
        <button className="btn btn-success w-75">Add To Cart</button>
      </div>
    </div>
  );
};

export default Bikes;
