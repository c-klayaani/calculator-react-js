import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CalculatorProvider } from "./context/CalculatorContext";
import { ValidationProvider } from "./context/ValidationContext";
import Page1 from "./navigation/Pages/page1";
import Page2 from "./navigation/Pages/page2";
import Page3 from "./navigation/Pages/page3";
import Page4 from "./navigation/Pages/page4";
import Page5 from "./navigation/Pages/page5";
import MainLayout from "./navigation/Pages/components/MainLayout";
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
      <CalculatorProvider>
      <ValidationProvider>
        <div>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Page1 />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
              <Route path="/page4" element={<Page4 />} />
              <Route path="/page5" element={<Page5 />} />
            </Route>
          </Routes>
        </div>
        </ValidationProvider>
      </CalculatorProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
