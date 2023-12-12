import { createContext, ReactNode, useContext, useState } from "react";

interface CalculatorContextProps {
  displayContent: string;
  setDisplayContent: (content: string) => void;
}

export const CalculatorContext = createContext<CalculatorContextProps>({
  displayContent: "",
  setDisplayContent: () => {},
});

export const CalculatorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [displayContent, setDisplayContent] = useState<string>("");

  return (
    <CalculatorContext.Provider value={{ displayContent, setDisplayContent }}>
      {" "}
      {children}{" "}
    </CalculatorContext.Provider>
  );
};

