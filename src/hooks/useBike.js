import { useEffect, useState } from "react";

const useBike = () => {
  const [bike, setBike] = useState([]);
  useEffect(() => {
    fetch`bike.json`
      .then((res) => res.json())
      .then((data) => setBike(data));
  }, []);

  return [bike, setBike];
};
export default useBike;
