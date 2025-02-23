
// LoginButton.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';


function Login() {

  const { isAuthenticated, logIn, logOut } = useContext(AuthContext);  // Accessing auth state and functions

  return (
    <div>
      <button onClick={isAuthenticated ? logOut : logIn}>
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
};

export default Login;
