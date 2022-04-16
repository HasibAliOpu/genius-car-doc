import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleUserSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/home");
  }
  return (
    <div className="form-container">
      {loading ? (
        <img
          src="https://c.tenor.com/YAs3DgW0dbMAAAAC/loading-loader.gif"
          alt=""
        />
      ) : (
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
            <div className="inputGroup">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" name="confirmPassword" />
            </div>

            <input type="submit" value="Register" className="submit-btn" />
          </form>
          <p style={{ textAlign: "center" }}>
            Already Have An Account?{" "}
            <Link className="form-link" to="/login">
              Login
            </Link>
          </p>
          <SocialLogin />
        </div>
      )}
    </div>
  );
};

export default Register;
