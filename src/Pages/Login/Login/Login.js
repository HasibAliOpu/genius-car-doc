import React from "react";
import { Link } from "react-router-dom";
import Google from "../../../images/icon/google.png";
import "./Login.css";
const Login = () => {
  const handleUserSignIn = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleUserSignIn}>
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" />
          </div>

          <input type="submit" value="Login" className="submit-btn" />
        </form>
        <p style={{ textAlign: "center" }}>
          New to Ema-John?{" "}
          <Link className="form-link" to="/register">
            Create New Account
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

export default Login;
