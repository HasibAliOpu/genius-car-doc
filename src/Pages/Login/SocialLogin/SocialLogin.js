import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Google from "../../../images/icon/google.png";
const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  let errorElement;
  if (googleError || githubError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {googleError?.message} {githubError?.message}{" "}
        </p>
      </div>
    );
  }
  if (googleUser || githubUser) {
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
      <button onClick={() => signInWithGoogle()} className="googleSignIn">
        <img src={Google} alt="" />
        <p className="pt-3">Continue with Google</p>
      </button>
      <button onClick={() => signInWithGithub()} className="googleSignIn">
        <img
          src="https://pngimg.com/uploads/github/github_PNG40.png"
          height={30}
          alt=""
        />
        <p className="pt-3">Continue with Github</p>
      </button>
    </div>
  );
};

export default SocialLogin;
