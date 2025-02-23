
import React, { useContext } from "react";
import EmployeeGrandChild from "./EmployeeGrandchild";
import { EmployeeContext } from "./EmployeeParent";

function EmployeeChild (){
    
    const employees = useContext(EmployeeContext);
  
    return (
      <div>
        <h2>Employee-Child Component</h2>
       
        <EmployeeGrandChild employees={employees} />
      </div>
    );
  };
  export default EmployeeChild