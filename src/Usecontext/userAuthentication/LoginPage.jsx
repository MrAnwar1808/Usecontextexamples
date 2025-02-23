
// App.js
import React from 'react';
import { AuthProvider } from './AuthProvider';
import UserStatus from './Userstatus';
import Login from './Login';

function Loginpage () {
  return (
    
   <AuthProvider>
      <div>
        <h1>User Authentication Example</h1>
        <UserStatus />
        <Login />
      </div>
    </AuthProvider>
  );
};

export default Loginpage;
