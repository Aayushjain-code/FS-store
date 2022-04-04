import axios from "axios";
import { useContext, createContext, useReducer } from "react";

const initialState = {
  cart: [],
  wishlist: [],
  toastData: {
    status: "",
    display: false,
    data: "",
  },
  loggedIn: false,
  testLogin: false,
  userName: "Profile",
  userId: "",
};

const authContext = createContext(initialState);

export const authReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS_TOAST":
      return {
        ...state,
        toastData: {
          ...state.toastData,
          status: "added",
          display: true,
          data: action.payload.toastMessage,
        },
        loggedIn: true,
        userName: action.payload.name,
        userId: action.payload.id,
      };
    case "TEST_TOAST":
      return {
        ...state,
        toastData: {
          ...state.toastData,
          status: "added",
          display: true,
          data: action.payload.toastMessage,
        },
        loggedIn: true,
        testLogin: true,
        userName: action.payload.name,
        userId: action.payload.id,
      };

    case "LOGOUT":
      return {
        ...state,
        toastData: {
          ...state.toastData,
          status: "removed",
          display: true,
          data: action.payload.toastMessage,
        },
        loggedIn: false,
        userName: "Profile",
        userId: action.payload.id,
      };

    case "ADD_TO_CART":
      console.log(action.payload.data);
      return {
        ...state,
        toastData: {
          ...state.toastData,
          status: "added",
          display: true,
          data: action.payload.toastMessage,
        },
        cart: action.payload.data,
      };

    case "REMOVE_FROM_CART":
      console.log(action.payload.data);
      return {
        ...state,
        toastData: {
          ...state.toastData,
          status: "removed",
          display: true,
          data: action.payload.toastMessage,
        },
        cart: action.payload.data,
      };
    case "UPDATE_CART":
      return {
        ...state,
        toastData: {
          ...state.toastData,
          status: "updated",
          display: true,
          data: action.payload.toastMessage,
        },
        cart: action.payload.data,
      };

    case "ADD_TO_WISHLIST":
      console.log(action.payload.data);
      return {
        ...state,
        toastData: {
          ...state.toastData,
          status: "added",
          display: true,
          data: action.payload.toastMessage,
        },
        wishlist: action.payload.data,
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        toastData: {
          ...state.toastData,
          status: "removed",
          display: true,
          data: action.payload.toastMessage,
        },
        wishlist: action.payload.data,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);

  const signup = async (userDetails) => {
    console.log("hello");
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: userDetails.email,
        password: userDetails.password,
      });
      console.log(response);
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: "SUCCESS_TOAST",
        payload: {
          name: response.data.createdUser.firstName,
          toastMessage: "Signed Up",
          id: response.data.createdUser._id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (userDetails) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: userDetails.email,
        password: userDetails.password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: "SUCCESS_TOAST",
        payload: {
          name: response.data.foundUser.firstName,
          toastMessage: "Logged in",
          id: response.data.foundUser._id,
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const testLogin = async () => {
    const userEmail = "test123@gmail.com";
    const userPassword = "testLogin@123";
    try {
      const response = await axios.post("/api/auth/login", {
        email: userEmail,
        password: userPassword,
      });
      localStorage.setItem("token", response.data.encodedToken);
      console.log(response);
      authDispatch({
        type: "TEST_TOAST",
        payload: {
          name: response.data.foundUser.firstName,
          toastMessage: "Logged In",
          id: response.data.foundUser._id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    authDispatch({
      type: "LOGOUT",
      payload: { toastMessage: "Logged Out", id: "" },
    });
  };

  return (
    <authContext.Provider
      value={{ authState, authDispatch, signup, login, testLogin, logout }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
