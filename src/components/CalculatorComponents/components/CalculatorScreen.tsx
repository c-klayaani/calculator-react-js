import { ReactNode } from "react";

type CalculatorScreenProps = {
  content: ReactNode;
  onClick: () => void;
  color: string;
  clipboardMessage: string | null;
};

const CalculatorScreen = (props: CalculatorScreenProps) => {
  return (
    <div className="disp-container">
      <div
        className="disp border-black border-radius-8 font-family"
        style={{ cursor: "pointer" }}
        onClick={props.onClick}
      >
        {props.content}
      </div>
      {
        <div className="clipboard-message">
          <small>{props.clipboardMessage || " "}</small>
        </div>
      }
    </div>
  );
};

export default CalculatorScreen;
