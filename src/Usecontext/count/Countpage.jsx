
import React from "react";
import { CountProvider } from "./Countprovider";
import CounterDisplay from "./counterDisplay";
import CounterControls from "./CounterControls";

function Countpage(){
    return(
        
    <CountProvider>

        <div>
            <h1>Increment and Decrement using Use-context</h1>
            <CounterDisplay />
            <CounterControls />
        </div>

    </CountProvider>
    )
}

export default Countpage