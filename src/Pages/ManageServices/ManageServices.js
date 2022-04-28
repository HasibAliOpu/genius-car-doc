import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import useServices from "../../Hooks/useServices/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = async (id) => {
    const proceed = window.confirm("Are You Sure??");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      const { data } = await axios.delete(url);

      if (!data.success) return toast.error(data.error);
      const remaining = services.filter((service) => service._id !== id);
      setServices(remaining);
      toast(data.message);
    }
  };
  return (
    <div>
      <h1>Manage your Services</h1>
      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}{" "}
            <button
              onClick={() => handleDelete(service._id)}
              className="btn btn-info"
            >
              🚮
            </button>{" "}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
