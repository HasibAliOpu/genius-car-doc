import axios from "axios";
import { useEffect, useState } from "react";

const useServiceDetail = (serviceId) => {
  const [service, setService] = useState([]);

  useEffect(() => {
    const url = `https://evening-wildwood-15814.herokuapp.com/service/${serviceId}`;
    (async () => {
      const { data } = await axios.get(url);
      setService(data);
    })();
  }, [serviceId]);
  return [service];
};

export default useServiceDetail;
