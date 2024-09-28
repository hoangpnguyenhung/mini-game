import { useState } from "react";
import "./App.css";
import { ResultTitleType } from "./types";
import PointTime from "./components/pointTime/PointTime";
import GameDisplay from "./components/gameDisplay/GameDisplay";

function App() {
  const [resultGame, setResultGame] = useState<ResultTitleType>("Let's play");
  const [points, setPoints] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(false);
  const [activePoints, setActivePoints] = useState<number[]>([]);

  const handlePlay = () => {
    setPlay(true);
    setResultGame("Let's play");
    setActivePoints([]);
    // setActivePoints(createArray(parseInt(points)).map(() => Math.random()));
  };

  return (
    <div className="App">
      <div className="container">
        <h2
          className="title"
          style={{
            color:
              resultGame === "Game over"
                ? "red"
                : resultGame === "All clear"
                ? "green"
                : "inherit",
          }}
        >
          {resultGame}
        </h2>
        <PointTime
          value={points}
          setValue={setPoints}
          play={play}
          handlePlay={handlePlay}
        />
        <GameDisplay
          points={points}
          setPlay={setPlay}
          setResultGame={setResultGame}
          isPlayed={play}
          activePoints={activePoints}
          setActivePoints={setActivePoints}
        />
      </div>
    </div>
  );
}

export default App;
