import "./MainContent.css";
import React from "react";
import ButtonContinue from "../ButtonContinue/ButtonContinue";
import { useState } from "react";
import ButtonCheckAnswer from "../ButtonCheckAnswer/ButtonCheckAnswer";

const MainContent = (props) => {
  const [guessedWord, setGuessedWord] = useState("__________"); // value of guessed word
  const [guessableStyles, setGuessableStyles] = useState({
    // DEFAULT STYLE, also used to dynamically switch styles when a word is selected
    lineHeight: "2",
    borderRadius: "20px",
    paddingLeft: "25px",
    paddingRight: "25px",
    paddingTop: "10px",
    paddingBottom: "10px",
    wordSpacing: "2px",
  });
  const [wordButtonStyle, setWordButtonStyle] = useState({    //default wordButton styles
    backgroundColor: "white",
    color: "rgb(41, 85, 113)",
    width: "auto",
    height: "50px",
    borderRadius: "20px",
    border: "none",
    fontFamily: "Roboto",
    fontSize: "20px",
    padding: "28px 38px 28px 38px",
    margin: "7px",
    lineHeight: "0px",
    fontWeight: "700",
  });

  const handleChoice = (e) => {                       //using event data to handle and update choices
     e.preventDefault();
    setGuessedWord(e.currentTarget.textContent);
    setGuessableStyles({
      lineHeight: "2",
      borderRadius: "20px",
      paddingLeft: "25px",
      paddingRight: "25px",
      paddingTop: "10px",
      paddingBottom: "10px",
      wordSpacing: "2px",
      backgroundColor: "white",
      color: "rgb(41, 85, 113)",
    });
  };

  //all words and choices are split up on their own, this is for better state and styling control
  return (
    <>
      <div className="contentContainer">
        <h2 className="instructionText">Fill in the missing word</h2>{" "}
        {/*always static*/}
        <h1 className="sentenceText">
          {props.questions[props.currQ].firstWord}{" "}
          <strong>
            <u>{props.questions[props.currQ].secondWord}</u>              
          </strong>{" "}
          {props.questions[props.currQ].thirdWord}{" "}
          {props.questions[props.currQ].fourthWord}
        </h1>
        <p className="wordGuess">
          <span className="nonGuessable">
            {props.questions[props.currQ].ENG_firstWord}
          </span>{" "}
          <span id="guessable" style={guessableStyles}>
            {guessedWord}
          </span>{" "}
          <span className="nonGuessable">
            {props.questions[props.currQ].ENG_thirdWord}
          </span>{" "}
          <span className="nonGuessable">
            {props.questions[props.currQ].ENG_fourthword}
          </span>
        </p>
        <div className="wordsWrapper">
          <button
            className="wordButton"
            onClick={handleChoice}
          >
            {props.questions[props.currQ].choices[0]}
          </button>
          <button
            className="wordButton"
            onClick={handleChoice}
          >
            {props.questions[props.currQ].choices[1]}
          </button>{" "}
          <br></br>
          <button
            className="wordButton"
            onClick={handleChoice}
          >
            {props.questions[props.currQ].choices[2]}
          </button>
          <button
            className="wordButton"
            onClick={handleChoice}
          >
            {props.questions[props.currQ].choices[3]}
          </button>
        </div>
        <div className="btnContinueWrapper">
          {/*using conditional rendering to make sure user wont see "check answer" button without choosing an answer first*/}
          {guessedWord === "__________" ? (    
            <ButtonContinue />                            
          ) : (
            <ButtonCheckAnswer
              guessedWord={guessedWord}
              setGuessedWord={setGuessedWord}
              questions={props.questions}
              currQ={props.currQ}
              setCurrQ={props.setCurrQ}
              progress={props.progress}
              setProgress={props.setProgress}
              setGuessableStyles={setGuessableStyles}
              setWordButtonStyle = {setWordButtonStyle}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MainContent;
