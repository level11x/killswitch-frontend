import { useEffect, useState } from 'react'

import { END_AUCTION_REDIRECT_DATE_STRING } from "../config/common";

const useCountdownCloseAuction = () => {
  const [isCloseAuction, setIsCloseAuction] = useState(
      new Date() >= new Date(END_AUCTION_REDIRECT_DATE_STRING)
  );

  useEffect(() => {
      if (!isCloseAuction) {
          const diffTime = new Date(END_AUCTION_REDIRECT_DATE_STRING) - new Date();
          console.log("diffTime", diffTime);
          const timeout = setTimeout(() => {
              setIsCloseAuction(true);
          }, diffTime);
          return () => clearTimeout(timeout);
      }
  }, [isCloseAuction]);

  return { isCloseAuction }
}

export default useCountdownCloseAuction