import { async } from "@firebase/util";
import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Register.css";
const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const handleUserSignIn = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });

    navigate("/home");
  };
  if (loading || updating) {
    return <Loading />;
  }
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Please Register !!</h1>
        <form onSubmit={handleUserSignIn}>
          <div className="inputGroup">
            <label htmlFor="YourName">Your Name</label>
            <input type="text" name="name" />
          </div>
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>

          <span className="d-flex  gap-1">
            <input
              onClick={() => setAgree(!agree)}
              type="checkbox"
              name="terms"
              style={{ marginTop: "6px" }}
            />
            <p className={agree ? "text-primary" : "text-danger"}>
              Accepts all Terms and Conditions
            </p>
          </span>
          <input
            disabled={!agree}
            type="submit"
            value="Register"
            className="submit-btn"
          />
        </form>

        <p className="mt-2">
          Already Have An Account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
