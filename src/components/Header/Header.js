import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <h1 className=" Restaurants">Restaurants</h1>
      <nav className="nav ms-auto">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/bike">Bike</CustomLink>
        <CustomLink to="/reachart">Reachart</CustomLink>
        <CustomLink to="/about">About</CustomLink>
       
      </nav>
      <div>
          <Form className="d-flex from ">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
    </div>
  );
};

export default Header;
