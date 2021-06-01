import React, { useEffect, useState } from 'react'

export default function CountdownBox({ day, hour, minute, second , startMonth, startDay, startHour, endMonth, endDay, endHour, className,...props}) {


    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(year, endMonth, endDay, endHour) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60)
            };
          }

        return timeLeft;
    }

    const timerComponents = [];
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year,setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
            setYear(new Date().getFullYear());
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    }, [timeLeft])
    return (
        <div {...props} className={['container max-w-screen-lg mx-auto px-md',className || " "].join(" ")}>
            {timerComponents}
             {
                day ?
                    <div className="h-24 w-24 md:h-36 md:w-36 2xl:h-48 2xl:w-48 rounded-2xl bg-white flex flex-col p-2 z-10">
                        <span className="font-bold text-base md:text-2xl text-gray-400 text-center">Days</span>
                        <span className="flex-1 font-bold text-4xl md:text-7xl grid place-items-center">{timeLeft.days}</span>
                    </div>
                    : null
            }
            {
                hour ?
                    <div className="h-24 w-24 md:w-36 md:h-36 2xl:h-48 2xl:w-48 rounded-2xl bg-white flex flex-col p-2 z-10">
                        <span className="font-bold text-base md:text-2xl text-gray-400 text-center">Hours</span>
                        <span className="flex-1 font-bold text-4xl md:text-7xl grid place-items-center">{timeLeft.hours}</span>
                    </div>
                    : null
            }
            {
                minute ?
                    <div className="h-24 w-24 md:w-36 md:h-36 2xl:h-48 2xl:w-48 rounded-2xl bg-white flex flex-col p-2 z-10">
                        <span className="font-bold text-base md:text-2xl text-gray-400 text-center">Minutes</span>
                        <span className="flex-1 font-bold text-4xl md:text-7xl grid place-items-center">{timeLeft.minutes}</span>
                    </div>
                    : null
            }
            {
                second ?
                    <div className="h-24 w-24 md:w-36 md:h-36 2xl:h-48 2xl:w-48 rounded-2xl bg-white flex flex-col p-2 z-10">
                        <span className="font-bold text-base md:text-2xl text-gray-400 text-center">Seconds</span>
                        <span className="flex-1 font-bold text-4xl md:text-7xl grid place-items-center">{timeLeft.seconds}</span>
                    </div>
                    : null
            }
        </div>
    )
}
