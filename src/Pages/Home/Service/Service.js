import React from "react";
import { Button } from "react-bootstrap";
import "./Service.css";
const Service = ({ service }) => {
  const { name, price, img, description } = service;
  return (
    <div className="service">
      <img src={img} alt="" />

      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>
        <small>{description}</small>
      </p>
      <Button className="my-2" variant="outline-primary">
        Book: {name}
      </Button>
    </div>
  );
};

export default Service;
