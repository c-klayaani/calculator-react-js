import { createContext, ReactNode, useContext, useState } from 'react';

interface CalculatorContextProps {
  displayContent: string;
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
}

const CalculatorContext = createContext<CalculatorContextProps | undefined>(undefined);

export const CalculatorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [displayContent, setDisplayContent] = useState<string>('');

  return (
    <CalculatorContext.Provider value={{ displayContent, setDisplayContent }}> {children} </CalculatorContext.Provider>
  );
};

export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext);
  
  if (!context) throw new Error('useCalculatorContext must be used within a CalculatorProvider');
  return context;
};
