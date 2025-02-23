
// AuthContext.js
import React, { createContext, useState } from 'react';

// Create a Context for Authentication
const AuthContext = createContext();

// Create a Provider Component for Auth Context
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logIn = () => setIsAuthenticated(true);
  const logOut = () => setIsAuthenticated(false);

  return (
  
    <AuthContext.Provider value={{ isAuthenticated, logIn, logOut }}>
        {children}
    </AuthContext.Provider>
 
  );
};

export { AuthProvider, AuthContext };
