const ButtonCheckAnswer = (props) => {

  const style = {                                         //styling
    width: "80%",
    height: "60px",
    borderRadius: "30px",
    fontFamily: "Roboto",
    fontSize: "13px",
    color: "white",
    border: "none",
    backgroundColor: "rgb(47, 224, 234)",
    marginTop: "20%",
    cursor: "pointer",
  };

  return (
    <button
      style={style}
      onClick={() => {
        if (props.guessedWord === props.questions[props.currQ].correctAnswer) {  // answer checking, updating styles & progressing
          props.setProgress(props.progress + 10);   
          props.setGuessableStyles({
            backgroundColor: "rgb(47, 225, 231)",
            lineHeight: "2",
            borderRadius: "20px",
            paddingLeft: "25px",
            paddingRight: "25px",
            paddingTop: "10px",
            paddingBottom: "10px",
            wordSpacing: "2px",
          });
          setTimeout(() => {
            props.setCurrQ(props.currQ + 1);
            props.setWordButtonStyle({
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
            props.setGuessableStyles({
              lineHeight: "2",
              borderRadius: "20px",
              paddingLeft: "25px",
              paddingRight: "25px",
              paddingTop: "10px",
              paddingBottom: "10px",
              wordSpacing: "2px",
            });
            props.setGuessedWord("__________");   // aesthethic timeout
          }, 1000);
        } else {
          props.setGuessableStyles({    //if answer was wrong, update styles accordingly
            lineHeight: "2",
            borderRadius: "20px",
            paddingLeft: "25px",
            paddingRight: "25px",
            paddingTop: "10px",
            paddingBottom: "10px",
            wordSpacing: "2px",
            backgroundColor: "rgb(252, 125, 134)",
          });
        }
      }}
    >
      CHECK ANSWER
    </button>
  );
};

export default ButtonCheckAnswer;
