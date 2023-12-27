import React, { createContext, useContext, ReactNode } from 'react';

interface ValidationContextProps {
  isValidEmail: (email: string) => boolean;
}

export const ValidationContext = createContext<ValidationContextProps | undefined>(undefined);

interface ValidationProviderProps {
  children: ReactNode;
}

export const ValidationProvider: React.FC<ValidationProviderProps> = ({ children }) => {
  const isValidEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <ValidationContext.Provider value={{ isValidEmail }}>
      {children}
    </ValidationContext.Provider>
  );
};
