import { useState } from "react";

function ColorChange() {
    const [colorIndex, setColorIndex] = useState(0);
    
    let backgroundColor;
    if (colorIndex === 0) {
        backgroundColor = "bg-green-600";
    } else if (colorIndex === 2) {
        backgroundColor = "bg-pink-300";
    } else if (colorIndex == 4) {
        backgroundColor = "bg-yellow-500";
    } else if (colorIndex === 6) {
        backgroundColor = "bg-red-400";
    } else {
        backgroundColor = "bg-orange-500";
    }
    const left = `w-[50%] h-full ${backgroundColor}`;

    let backgroundColor1;
    if (colorIndex == 1) {
        backgroundColor1 = "bg-purple-500";
    } else if (colorIndex === 3) {
        backgroundColor1 = "bg-teal-500";
    } else if (colorIndex == 5) {
        backgroundColor1 = "bg-rose-600";
    } else if (colorIndex === 7) {
        backgroundColor1 = "bg-green-400";
    } else {
        backgroundColor1 = "bg-lime-500 lime";
    }
    const right = `w-[50%] h-full ${backgroundColor1}`;
    return (
        <div className="w-full h-screen flex">
            <div className={left}> green</div>
            <div className="w-[30%] h-full bg-stone-600 ">
                <button
                    type="button"
                    className="ext-center text-2xl font-bold h-[10%] w-[60%] mt-40 m-5 border-green-600 
                hover:text-fuchsia-900 p-3 border-2 rounded-full"
                    onClick={() => setColorIndex(colorIndex + 1) % 5}> ColorChange
                </button>
            </div>
            <div className={right}>bangladesh</div>
        </div>
    )
};
export default ColorChange;