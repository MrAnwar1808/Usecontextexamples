
// UserStatus.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';


function UserStatus(){

  const { isAuthenticated } = useContext(AuthContext);  // Accessing authentication state

  return (
    <div>
      <h3>User Status: {isAuthenticated ? 'Welcome to homepage' : 'Thank you'}</h3>
    </div>
  );
};

export default UserStatus;
