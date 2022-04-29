import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../Hooks/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const CheckOut = () => {
  const { checkoutId } = useParams();
  const [service] = useServiceDetail(checkoutId);
  const [user] = useAuthState(auth);

  // const [user, setUser] = useState({
  //   name: "Akbor The Great",
  //   email: "akbor@gmail.com",
  //   address: "Tajmohol Road Md.pur",
  //   phone: "0175222222",
  // });
  // const handleAddressChange = (event) => {
  //   const { address, ...rest } = user;
  //   const newAddress = event.target.value;
  //   const newUser = { address: newAddress, ...rest };
  //   setUser(newUser);
  // };

  return (
    <div>
      <h1 className="my-3">Your Order: {service?.name}</h1>
      <form className="w-50 mx-auto">
        <input
          className="w-100 mb-2 p-1"
          type="text"
          name="name"
          placeholder="Name"
          value={user?.displayName}
          disabled
          required
        />
        <input
          className="w-100 mb-2 p-1"
          type="email"
          name="email"
          placeholder="Email"
          value={user?.email ? user?.email : "Email Not Found"}
          disabled
          required
        />
        <input
          className="w-100 mb-2 p-1"
          type="text"
          name="service"
          placeholder="Service"
          value={service.name}
          required
        />
        <input
          className="w-100 mb-2 p-1"
          type="text"
          name="address"
          placeholder="Address"
          required
          autoComplete="off"
        />
        <input
          className="w-100 mb-2 p-1"
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          required
        />
        <input
          type="button"
          value="Place Order"
          className="btn btn-primary px-5"
        />
      </form>
    </div>
  );
};

export default CheckOut;
