import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import axiosPrivate from "../Api/axiosPrivate";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const url = `https://evening-wildwood-15814.herokuapp.com/order?email=${user?.email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    })();
  }, [user]);
  return (
    <div>
      <h1>Your orders list: {orders.length} </h1>
      {orders.map((order) => (
        <div key={order._id}>
          <p>
            {order.email}: {order.service}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
