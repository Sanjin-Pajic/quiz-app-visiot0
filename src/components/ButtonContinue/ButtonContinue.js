import "./ButtonContinue.css";

const ButtonContinue = () => {             //simple continue button, had weird glitches with MaterialUI so I made my own
  const style = {
    width: "80%",
    height: "60px",
    borderRadius: "30px",
    fontFamily: "Roboto",
    fontSize: "13px",
    color: "white",
    border: "none",
    backgroundColor: "#758CA0",
    marginTop: "20%",
  };

  return <button style={style}>CONTINUE</button>;
};

export default ButtonContinue;
