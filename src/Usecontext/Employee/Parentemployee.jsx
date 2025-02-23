import React from "react"
import Childemployee from "./Childemployee"

function Parentemployee () {
    const employees = [ {id:1 , name: "Anwar", role: "developer", email: "anwar@gmail.com"},
        {id: 2 , name: 'farhan', role: "tester", email: "farhan@gmail.com"}
    ]
    return(
        <div>
            <Childemployee employees = {employees}/>
        </div>

    )
}
 export default Parentemployee