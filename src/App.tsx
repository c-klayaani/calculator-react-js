import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Page1 from '../src/components/Pages/page1';
import Page2 from '../src/components/Pages/page2';
import Page3 from '../src/components/Pages/page3';
import { CalculatorProvider } from './components/CalculatorContext';

const App: React.FC = () => {
  return (
    <Router>
      <CalculatorProvider>
        <div>
          <NavigationBar />
          <Routes>
            <Route index element={<Page1 />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </div>
      </CalculatorProvider>
    </Router>
  );
};

export default App;
