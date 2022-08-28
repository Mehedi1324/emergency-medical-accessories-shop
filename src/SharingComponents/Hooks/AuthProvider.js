import React, { createContext, useContext } from 'react';
import useFirebase from '../Firebase/useFirebase';
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
