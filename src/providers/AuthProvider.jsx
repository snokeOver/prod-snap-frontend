import { createContext, useEffect, useState } from "react";
import useSAxios from "../hooks/useSAxios";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../helper/GAuth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const nSAxios = useSAxios();

  const [loading, setLoading] = useState(true);
  const [tokenSaved, setTokenSaved] = useState(false);
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState({
    userRole: "",
    userRequest: "",
  });

  // Register with email and password
  const register = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // Check if the token is present in the cookies

  // Login with email and Password
  const signIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // Register with Google
  const googleRegister = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // Register with Github
  const githubRegister = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };

  // Update user Info
  const updateUser = (user, payLoad) => {
    return updateProfile(user, payLoad);
  };

  // Log out User
  const logOut = () => {
    return signOut(auth);
  };

  // Get Token and user details
  const getTokenAndUserDetils = async (currUser) => {
    // const { data } = await nSAxios.post("/api/jwt", { uid: currUser.uid });
    // if (data) {
    //   localStorage.setItem("access-token", data.token);
    //   setUserDetails(data.userDetails);
    //   setTokenSaved(true);
    // }
  };
  // console.log(userDetails);

  //   Observe ther user change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currUser) => {
      if (currUser?.uid) {
        setUser(currUser);
        getTokenAndUserDetils(currUser);
      } else {
        localStorage.removeItem("access-token");
        setTokenSaved(false);
        logOut();
      }

      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authItems = {
    user,
    setUser,
    register,
    loading,
    setLoading,
    signIn,
    logOut,
    updateUser,
    googleRegister,
    githubRegister,

    userDetails,
    setUserDetails,
    getTokenAndUserDetils,
  };
  return (
    <AuthContext.Provider value={authItems}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
