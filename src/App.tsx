import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CalculatorProvider } from "./context/CalculatorContext";
import Page1 from "./navigation/Pages/page1";
import Page2 from "./navigation/Pages/page2";
import Page3 from "./navigation/Pages/page3";
import MainLayout from "./navigation/Pages/components/MainLayout";

const App: React.FC = () => {
  return (
    <Router>
      <CalculatorProvider>
        <div>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Page1 />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
            </Route>
          </Routes>
        </div>
      </CalculatorProvider>
    </Router>
  );
};

export default App;
