import { MdKeyboardArrowLeft } from "react-icons/md";
import { Button, LinearProgress } from "@material-ui/core";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import "./Header.css";

export default function Header(props) {
  return (
    <>
      <nav className="header">
        <div className="navWrapper">
          <Button
            startIcon={<MdKeyboardArrowLeft color="white" size={"40px"} />}          // <- back icon
            onClick={() => {
              if (props.progress >= 10 && props.currQ >= 1) {
                props.setProgress(props.progress - 10);                   
                props.setCurrQ(props.currQ - 1);
              }
            }}
          ></Button>
          <div className="progressWrapper">
            <Progress
              percent={props.progress}          //overriding progress bar styles
              status="active"
              theme={{
                success: {
                  color: "rgb(223, 105, 180)",
                },
                active: {
                  color: "rgb(47, 225, 231)",
                },
                default: {
                  color: "#fbc630",
                },
              }}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
