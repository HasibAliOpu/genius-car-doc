import React from "react";

const Service = ({ service }) => {
  const { id, name, price, img, description } = service;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Service;
