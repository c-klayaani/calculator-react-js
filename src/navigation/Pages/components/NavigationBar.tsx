import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/style/NavigationBar.css';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useTheme } from '../../../context/ThemeContext';

const NavigationBar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className={`navigation-container ${isDarkTheme ? 'theme-dark' : 'theme-light'}`}>
      <Sidebar visible={visible} position="top" onHide={() => setVisible(false)} className={`custom-sidebar ${isDarkTheme ? 'theme-dark' : 'theme-light'}`}>
        <div className={`navigation-bar ${isDarkTheme ? 'theme-dark' : 'theme-light'}`}>
          <Link to="/page1">Calculator</Link>
          <Link to="/page2">Page 2</Link>
          <Link to="/page3">Page 3</Link>
          <Link to="/page4">Login</Link>
        </div>
        <Button className='mode' icon={`pi pi-${isDarkTheme ? 'moon' : 'sun'}`} onClick={toggleTheme} />
      </Sidebar>
      <Button icon="pi pi-arrow-down" onClick={() => setVisible(true)} />
    </div>
  );
};

export default NavigationBar;
