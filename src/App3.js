import React, { useEffect, useState } from "react";
import User3 from "./User3";

function App3(){

    const [ value, setValue ] = useState('');

    useEffect(()=>{
        console.log(value)
    },[value])

    return(
        <div>
            123
        </div>
    )
}
export default App3