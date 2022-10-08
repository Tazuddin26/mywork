
import { useEffect, useState } from "react";

function Time() {
    const [time, setTime] = useState();
    const [date, setDate] = useState();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    useEffect(() => {
        setInterval(() => {
            const today = new Date();

            const d = new Date();
            setTime(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());

        }, 100);
        setInterval(() => {
            const currentdate = new Date();
            setDate((currentdate.getDay() + 1) + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear());
        }, 100);

    }, []);
    return (
        <div className="w-full h-screen mt-40">
            <div className=" w-full h-1/6  flex justify-center ">
                <p className="p-4 border-4 rounded-full bg-blue-400 mt-10 ">  Date: {date}</p>
            </div>
            <div className=" w-full h-1/6  flex justify-center ">
                <p className="p-4 border-4 rounded-full bg-red-400 mt-10 "> Time: {time}</p>
            </div>

        </div>
    )
};
export default Time;