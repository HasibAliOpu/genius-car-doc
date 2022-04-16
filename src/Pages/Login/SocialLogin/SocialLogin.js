import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Google from "../../../images/icon/google.png";
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  let errorElement;
  if (googleError) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {googleError.message}</p>
      </div>
    );
  }
  if (googleUser) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="horizontal-divider">
        <div className="left-line"></div>
        <p>Or</p>
        <div className="right-line"></div>
      </div>
      {errorElement}
      <button onClick={handleGoogleSignIn} className="googleSignIn">
        <img src={Google} alt="" />
        <p className="pt-3">Continue with Google</p>
      </button>
    </div>
  );
};

export default SocialLogin;
