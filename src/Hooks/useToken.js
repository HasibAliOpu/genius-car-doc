import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    (async () => {
      const email = user.user.email;
      const { data } = await axios.post(
        `https://evening-wildwood-15814.herokuapp.com/login`,
        { email }
      );
      setToken(data);
      localStorage.setItem("accessToken", data);
    })();
  }, [user]);
  return [token];
};

export default useToken;
