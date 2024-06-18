import React, { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialUser = localStorage.getItem("user");

  const [authUser, setAuthUser] = useState(
    initialUser ? JSON.parse(initialUser) : null
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
