import React, {useState, useEffect} from 'react';

function DigitalClock(){
    const [time, setTime] = useState(new Date());

    // after every second, we will update the state of time
    useEffect(() =>{
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // when this component unmounts, we will return the ff
        // clear the interval
        return () => {
            clearInterval(intervalID);
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridiem = hours >= 12 ? "PM" : "AM";

        // convert from military time
        hours = hours % 12 || 12;
        
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }
    // to add leading zeros to single digit numbers
    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className='clock-container' style={{display: 'flex', alignItems: 'center', gap: '20px'}}> 
        <h3>TIME:</h3>
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock