import { useState } from "react"

function colorChangeing (){
    const[color,setColor] = useState("bg-blue-300");
    const className=`w-full h-screen ${color} flex justify-center`;
    return(
        <div className={className}>
                <button type="button"
                className="w-1/12 h-[3%] border border-bred-400"
                onClick ={() => setColor("bg-red-300")}>
                </button>
        </div>
        
    )
};
export default colorChangeing