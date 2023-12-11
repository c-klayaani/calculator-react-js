import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/NavigationBar.css';

const NavigationBar: React.FC = () => {
  return (
    <div className="navigation-bar">
      <Link to="/page1">Calculator</Link>
      <Link to="/page2">Page 2</Link>
      <Link to="/page3">Page 3</Link>
    </div>
  );
}

export default NavigationBar;
