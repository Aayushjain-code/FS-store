import "./toast.css";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";

export const Toast = () => {
  const {
    authState: { toastData },
    authDispatch,
  } = useAuth();
  const { status, display, data } = toastData;

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      authDispatch({ type: "REMOVE_TOAST" });
    }, 3000);
    return () => clearTimeout(timeoutID);
  }, [display]);

  return (
    <div
      className={`${display ? "snackbar-container" : "display-none"} ${status}`}
    >
      {data}
    </div>
  );
};
