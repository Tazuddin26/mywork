
import { useEffect, useState } from "react";

function Time() {
    const [time, setTime] = useState();
    const [date, setDate] = useState();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    useEffect(() => {
        setInterval(() => {
            const today = new Date();
            const currentdate = new Date();
            const d = new Date();
            setTime(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
            setDate(currentdate.getDay() + "/" + currentdate.getMonth() + "/" + currentdate.getFullYear());
        }, 100);
     

    }, []);
    return (
        <div>
            {date}
            <div>
                {time}
            </div>
        </div>
    )
};
export default Time;