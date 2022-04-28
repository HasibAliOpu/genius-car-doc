import React, { useEffect, useState } from "react";
import useServices from "../../../Hooks/useServices/useServices";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = useServices();
  return (
    <div id="services">
      <h1 className="text-primary my-4">Our Services</h1>
      <div className="services-container container">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
