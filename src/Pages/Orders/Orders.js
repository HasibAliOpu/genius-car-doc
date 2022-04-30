import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `http://localhost:5000/order?email=${user?.email}`
      );
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
