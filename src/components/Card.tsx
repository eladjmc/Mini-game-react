import React from "react";
import myImage from "../assets/images/monkey.jpg";
import trueIcon from "../assets/images/true.png";
import falseIcon from "../assets/images/false.png";
import "./Card.scss";
const MAX_ANIMAL_INDEX = 9;
interface AnimalsData {
  scores: {
    good: number,
    bad: number
  };
  statement: boolean,
  setScores: ({ good, bad }: {good: number, bad: number}) => void;
  index: number;
  handleGameOver: (isGoodPick: boolean) => void;
  setIndex: (index: number) => void;
  img: string;
  title: string;
  isGameOver: boolean;
}

const Card = (props: AnimalsData) => {
  const handlePick = (statement: boolean) => {
    let goodPick: number = props.scores.good;
    let badPick: number = props.scores.bad;

    if (statement === props.statement) {
      goodPick++;
      props.setScores({ good: goodPick, bad: badPick });
    } else {
      badPick++;
      props.setScores({ good: goodPick, bad: badPick });
    }
    if (props.index === MAX_ANIMAL_INDEX) {
      props.handleGameOver(goodPick >= badPick);
      return;
    }
    props.setIndex(props.index + 1);
  };

  return (
    <div className="card">
      <img className="animalImage" src={props.img} alt="" />
      <div className="bottom-container">
        <h1>This Animal Is:</h1>
        <h2>{props.title}</h2>
      </div>
      {!props.isGameOver && (
        <div className="true-false-container">
          <img onClick={() => handlePick(false)} src={falseIcon} alt="" />
          <img onClick={() => handlePick(true)} src={trueIcon} alt="" />
        </div>
      )}
    </div>
  );
};

export default Card;
