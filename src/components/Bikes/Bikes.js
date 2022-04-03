import React from "react";
import "./Bikes.css";
const Bikes = (props) => {
  console.log(props.bike);
  const { name, img, price } = props.bike;
  return (
    <div className="bikes col-md-4 ">
      <div className="m-2 bg-info rounded-3 pb-3">
        <div className="img-container">
          <img className="img-fluid rounded-3" src={img} alt="" />
        </div>
        <h1>{name}</h1>
        <p>Price:${price}</p>
        <button className="btn btn-success w-75">Add To Cart</button>
      </div>
    </div>
  );
};

export default Bikes;
