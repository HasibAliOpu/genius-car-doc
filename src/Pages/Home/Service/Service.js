import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const { id, name, price, img, description } = service;
  const navigate = useNavigate();
  return (
    <div className="service">
      <img src={img} alt="" />

      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>
        <small>{description}</small>
      </p>
      <Button
        onClick={() => navigate(`/service/${id}`)}
        className="my-2"
        variant="outline-primary"
      >
        Book: {name}
      </Button>
    </div>
  );
};

export default Service;
