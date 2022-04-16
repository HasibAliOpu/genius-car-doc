import React from "react";
import { Link } from "react-router-dom";
import Google from "../../../images/icon/google.png";
import "./Register.css";
const Register = () => {
  const handleUserSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    console.log(email, password, confirmPassword);
  };
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
        <div className="horizontal-divider">
          <div className="left-line"></div>
          <p>Or</p>
          <div className="right-line"></div>
        </div>
        <button className="googleSignIn">
          <img src={Google} alt="" />
          <p className="pt-3">Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Register;
