import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const [service, setService] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h3>Service Details {params.serviceId}</h3>
      {/* {service.find((sv) => sv.id === params.serviceId)} */}
    </div>
  );
};

export default ServiceDetail;
