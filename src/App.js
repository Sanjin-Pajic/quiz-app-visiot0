import { cloneDeep, initial } from "lodash";
import Header from "./components/Header/Header";
import data from "./data";
import MainContent from "./components/MainContent/MainContent";
import EndgameScreen from "./components/EndgameScreen/EndgameScreen";
import { useState } from "react";
import "./App.css";

function App() {
  const [currQ, setCurrQ] = useState(0); //current question
  const [progress, setProgress] = useState(0); // progress bar value

  let questions = cloneDeep(data); // used lodash clone for memory reasons

  return (
    <div className="App">
      <div className="appContainer">
        <Header
          progress={progress}
          setProgress={setProgress}
          currQ={currQ}
          setCurrQ={setCurrQ}
        />

        {currQ <= 9 ? (
          <MainContent
            currQ={currQ}
            setCurrQ={setCurrQ}
            progress={progress}
            setProgress={setProgress}
            questions={questions}
          />
        ) : (
          <EndgameScreen setCurrQ={setCurrQ} setProgress={setProgress} />
        )}
      </div>
    </div>
  );
}

export default App;
