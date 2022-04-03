import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

import useMeals from "../../hooks/useMeals";
import Meals from "../Meals/Meals";
import "./Home.css";
const Home = () => {
  const [value, setSearch] = useState([]);
  const [meals] = useMeals(value);
  // console.log(meals);
  const searchText = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className=" container">
      <Form className=" w-25 m-auto mt-3">
        <FormControl
          onChange={searchText}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>

      <div className=" row grid col-md-12 p-3 gap-3">
        {meals.map((meal) => (
          <Meals key={meal.idMeal} meal={meal}></Meals>
        ))}
      </div>
    </div>
  );
};

export default Home;
