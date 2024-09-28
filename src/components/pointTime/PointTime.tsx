import React, { useEffect, useState } from "react";
import "./style.css";
import ButtonPlay from "../buttonPlay/ButtonPlay";

type Props = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  play: boolean;
  handlePlay: () => void;
};

const PointTime = ({ value, setValue, play, handlePlay }: Props) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);

  const handleClick = () => {
    handlePlay();
    setSeconds(0);
    setValue(points);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (play) setSeconds((prevSeconds) => prevSeconds + 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, [play]);

  return (
    <>
      <div>
        <label htmlFor="">Points:</label>
        <input
          type="text"
          onChange={(e) => setPoints(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="">Times:</label>
        <span>{seconds.toFixed(1)}</span>
      </div>
      <ButtonPlay handleClick={handleClick} />
    </>
  );
};

export default PointTime;
