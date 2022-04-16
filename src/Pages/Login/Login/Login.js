import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

import "./Login.css";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleUserSignIn = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
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
          <h1 className="form-title">Login</h1>
          <form onSubmit={handleUserSignIn}>
            <div className="inputGroup">
              <label htmlFor="email">Email</label>
              <input ref={emailRef} type="email" name="email" />
            </div>
            <div className="inputGroup">
              <label htmlFor="password">Password</label>
              <input ref={passwordRef} type="password" name="password" />
            </div>

            <input type="submit" value="Login" className="submit-btn" />
          </form>
          <p style={{ textAlign: "center" }}>
            New to The Car Doctor?{" "}
            <Link className="form-link" to="/register">
              Create New Account
            </Link>
          </p>
          <SocialLogin />
        </div>
      )}
    </div>
  );
};

export default Login;
