import { useState } from "react";
function Timer (){
const Timer = ({ seconds }) => {
    const [timeLeft, setTimeLeft] = useState('');

    const now = Date.now();
    const then = now + seconds * 1000;

    const countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft <= 0) {
            clearInterval(countDown);
            console.log('done!');
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);

    const displayTimeLeft = seconds => {
        let minutesLeft = Math.floor(seconds/60) ;
        let secondsLeft = seconds % 60;
        minutesLeft = minutesLeft.toString().length === 1 ? "0" + minutesLeft : minutesLeft;
        secondsLeft = secondsLeft.toString().length === 1 ? "0" + secondsLeft : secondsLeft;
        return `${minutesLeft}:${secondsLeft}`;
    }
    useEffect(() => {
        setInterval(() => {
            setTimeLeft(displayTimeLeft(seconds));
        }, 1000);
    }, [seconds])


    return (
        <div><h1>{timeLeft}</h1></div>
    )
};

export default Timer;