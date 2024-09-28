import React from "react";
import useRandom from "../../hooks/useRandom";

type Props = {
  checkResult: (p: number) => void;
  index: number;
  isActive: boolean;
  point: number;
  frameRef: React.MutableRefObject<HTMLDivElement | null>;
  points: number;
};
const PointBtnHeight = 50; // px
const PointBtnWidth = 50; // px
const ButtonPoint = ({
  checkResult,
  frameRef,
  index,
  isActive,
  point,
  points,
}: Props) => {
  const randomX = useRandom();
  const randomY = useRandom();

  return (
    <button
      className={`point_btn ${isActive ? "active" : ""}`}
      key={index}
      style={{
        position: "absolute",
        top: `${Math.abs(
          randomY * (frameRef.current?.clientHeight || 0) - PointBtnHeight
        )}px`,
        left: `${Math.abs(
          randomX * (frameRef.current?.clientWidth || 0) - PointBtnWidth
        )}px`,

        zIndex: points - point,
      }}
      onClick={() => {
        checkResult(point);
      }}
    >
      {point}
    </button>
  );
};

export default ButtonPoint;
