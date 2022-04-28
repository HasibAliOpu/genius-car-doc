import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="mt-5">
        <h3 className="text-danger">Your Email is Not Verified</h3>
        <h5 className="text-success">Please Verify your Email Address</h5>
        <button
          className="btn btn-primary"
          onClick={async () => {
            await sendEmailVerification();
            toast("Send Email");
            console.log("send Email");
          }}
        >
          Send Verification Email Again
        </button>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
