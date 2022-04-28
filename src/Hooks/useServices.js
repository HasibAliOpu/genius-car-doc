import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:5000/service`);

      setServices(data);
    })();
  }, []);
  return [services, setServices];
};

export default useServices;
