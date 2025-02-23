
import React, { createContext, useState } from 'react';
import EmployeeChild from './EmployeeChild';

export const EmployeeContext = createContext();


function EmployeeParent () {
  
  const [employees] = useState([
    { id: 1, name: 'Anwar', position: 'Devoloper', email:'Anwar@gmail.com' },
    { id: 2, name: 'Farhan', position: 'Product Manager', email: 'Farhan@gmail.com'},
    { id: 3, name: 'Anwar Farhan', position: 'Web Designer', email: 'anwarfarhan@gmail.com' }
  ]);

  return (
 
    <EmployeeContext.Provider value={employees}>
      <EmployeeChild />
    </EmployeeContext.Provider>
  );
};



export default EmployeeParent