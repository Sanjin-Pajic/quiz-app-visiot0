import Button from "@material-ui/core/Button";
import { GrPowerReset } from "react-icons/gr";
import lightgreen from "../../img/lightgreen.png";
import "./EndgameScreen.css";



const EndGameScreen = (props) => {
  const restartQuiz = () => {                 //reset game
    props.setCurrQ(0);
    props.setProgress(0);
  } 
  
  

  return (
    <div className="endgameScreen">
      <div className="endGameWrapper">
        <h1 className="string--congrats">CONGRATULATIONS!</h1>
        <p className="string--finished">You have finished the quiz.</p>
        <div className="successImgWrapper"><img src={lightgreen} className="successImg"></img></div>
        <div className="btnResetWrapper"><Button size="large" style={{fontSize: "25px", fontWeight: "lighter"}} startIcon={<GrPowerReset />} onClick={restartQuiz}>RESTART</Button></div>
      </div>
    </div>
  );
};

export default EndGameScreen;
