import React, { useContext } from "react";
import "../../assets/style/Page2.css";
import { useCalculatorDisplay } from "../../hooks/useCalculatorDisplay";

const Page2: React.FC = () => {
  const { displayContent } = useCalculatorDisplay();

  return (
    <div className="page-container">
      <h1>Page 2</h1>
      <p>Display Content from Calculator: {displayContent}</p>
    </div>
  );
};

export default Page2;
