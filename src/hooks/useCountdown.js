import { useEffect, useState } from 'react'

const calculateTimeLeft = ({ endMonth, endDay, endHour, timestamp }) => {
  const year = new Date().getFullYear();
  const targetDate = timestamp ? new Date(timestamp) : +new Date(year, endMonth, endDay, endHour)
  const difference =  targetDate - +new Date();

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  } else {
    return {
      isExpired: true,
    }
  }

}

const useCountdown = ({ endMonth, endDay, endHour, timestamp } = {}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft({ endMonth, endDay, endHour, timestamp }));

  useEffect(() => {
      const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft({ endMonth, endDay, endHour, timestamp }));
      }, 1000);
      // Clear timeout if the component is unmounted
      return () => clearTimeout(timer);
  }, [endDay, endHour, endMonth, timestamp, timeLeft])

  return {
    days: timeLeft?.days,
    hours: timeLeft?.hours,
    minutes: timeLeft?.minutes,
    seconds: timeLeft?.seconds,
    isExpired: timeLeft?.isExpired,
  }
}

export default useCountdown