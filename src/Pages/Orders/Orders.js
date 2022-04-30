import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    (async () => {
      const url = `http://localhost:5000/order?email=${user?.email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setOrders(data);
    })();
  }, [user]);
  return (
    <div>
      <h1>Your orders list: {orders.length} </h1>
    </div>
  );
};

export default Orders;
