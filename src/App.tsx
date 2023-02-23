import React, { useState } from "react";
import Card from "./components/Card";
import "./styles/App.scss";
import RightImage from "./assets/images/thumbsup.png";
import WrongImage from "./assets/images/thumbsdown.png";
import Data from "./data/data";

interface AnimalsData {
  title: string;
  img: any;
  statement: boolean;
}
const data: AnimalsData[] = Data;

function App() {
  const [index, setIndex] = useState<number>(0);
  const [scores, setScores] = useState<any>({ good: 0, bad: 0 });
  const [endGameMessage, setEndGameMessage] = useState<string>('');
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const handleGameOver = (isWin:boolean) => {
    const status: string = isWin ? "You Win" : "You Lose";
    setEndGameMessage(status);
    setIsGameOver(true);
  };

  return (
    <div className="App">
      <div className="score-container">
        <div className="bad">
          <span>{scores.bad}</span>
          <img src={WrongImage} alt="" />
        </div>

        <h2>{endGameMessage}</h2>

        <div className="good">
          <span>{scores.good}</span>
          <img src={RightImage} alt="" />
        </div>
      </div>
      <Card
        title={data[index].title}
        img={data[index].img}
        statement={data[index].statement}
        scores={scores}
        setScores={setScores}
        setIndex={setIndex}
        index={index}
        handleGameOver={handleGameOver}
        isGameOver={isGameOver}
      />
    </div>
  );
}

export default App;
