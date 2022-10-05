import { useState } from "react";
function Counter() {
    const [Counter, setCounter] = useState(0);
    return (
        <div className="w-full h-screen mt-40">
            <p className="text-3xl rounded hover:rounded-lg bg-pink-400 mb-4">Donate Amount {Counter} </p>
            <button
                className="w-[10%] h-[10%] border bg-yellow-300 text-3xl text-white hover:bg-sky-400 mr-4"
                onClick={() => setCounter(Counter - 100)} >Decrease
            </button>
            <button
                type="button"
                className="w-[25%] h-[25%] border bg-gray-300 text-3xl text-white hover:bg-sky-400 mr-4"
                onClick={() => setCounter(Counter + 100)} > Donate 100Tk
            </button>
            <button
                type="button"
                className="w-[10%] h-[10%] border bg-green-300 text-3xl text-white hover:bg-sky-400 mr-4"
                onClick={() => setCounter(Counter + 100)}>Increase
            </button>
            <div className="mt-4">
                <button
                    type="button"
                    className="w-[10%] h-[10%] border bg-red-300 text-3xl text-white hover:bg-sky-400 mr-4"
                    onClick={() => setCounter(0)}>Reset
                </button>
            </div>
        </div>
    )
};
export default Counter;