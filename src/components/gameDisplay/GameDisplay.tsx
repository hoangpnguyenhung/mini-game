import React, { useRef } from "react";
import { ResultTitleType } from "../../types";
import "./style.css";
import { createArray } from "../../utils/createArray";
import ButtonPoint from "../buttonPoint/ButtonPoint";

type Props = {
  points: number;
  isPlayed: boolean;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
  setResultGame: React.Dispatch<React.SetStateAction<ResultTitleType>>;
  activePoints: number[];
  setActivePoints: React.Dispatch<React.SetStateAction<number[]>>;
};

const GameDisplay = ({
  points,
  isPlayed,
  activePoints,
  setActivePoints,
  setPlay,
  setResultGame,
}: Props) => {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const ArrayPoints = createArray(points);

  const checkResult = (point: number) => {
    if (activePoints.length < 1) {
      if (point > 1) {
        setPlay(false);
        setResultGame("Game over");
      } else setActivePoints([point]);
    } else if (activePoints[activePoints.length - 1] !== point - 1) {
      setPlay(false);
      setResultGame("Game over");
      setActivePoints([]);
    } else if (
      activePoints[activePoints.length - 1] === point - 1 &&
      activePoints.length + 1 <= ArrayPoints.length - 1
    ) {
      setActivePoints([...activePoints, point]);
    } else {
      setActivePoints([...activePoints, point]);
      setPlay(false);
      setResultGame("All clear");
    }
  };

  return (
    <div className="frame" ref={frameRef}>
      {isPlayed &&
        points &&
        createArray(points).map((point, index) => {
          const isActive = activePoints.includes(point);

          return (
            <ButtonPoint
              checkResult={checkResult}
              point={point}
              frameRef={frameRef}
              index={index}
              isActive={isActive}
              points={points}
            />
          );
        })}
    </div>
  );
};

export default GameDisplay;
