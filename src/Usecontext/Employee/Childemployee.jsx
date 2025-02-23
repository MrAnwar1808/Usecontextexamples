
import React from "react";

function Childemployee(props){
    return(
        <div>
            <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                </tr>
            </thead>

            <tbody >
                {props.employees.map(employee => (
                <tr key={employee.id}>

                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.role}</td>
                    <td>{employee.email}</td>


                </tr>

                
))}
            </tbody>

            </table>
        </div>

    )
}

export default Childemployee