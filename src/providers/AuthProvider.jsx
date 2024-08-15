import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState({
    userRole: "",
    userRequest: "",
  });

  const authItems = {
    loading,
    setLoading,
    user,
    setUser,
    setUserDetails,
    userDetails,
  };
  return (
    <AuthContext.Provider value={authItems}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
