import axios from "axios";
import { useEffect, useState } from "react";

const useServiceDetail = (serviceId) => {
  const [service, setService] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `http://localhost:5000/service/${serviceId}`
      );
      setService(data);
    })();
  }, [serviceId]);
  return [service];
};

export default useServiceDetail;
