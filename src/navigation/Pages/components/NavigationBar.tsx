import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/style/NavigationBar.css';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const NavigationBar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="navigation-container">
      <Sidebar visible={visible} position="top" onHide={() => setVisible(false)} className="custom-sidebar">
        <div className="navigation-bar">
          <Link to="/page1">Calculator</Link>
          <Link to="/page2">Page 2</Link>
          <Link to="/page3">Page 3</Link>
        </div>
      </Sidebar>
      <Button icon="pi pi-arrow-down" onClick={() => setVisible(true)} />
    </div>
  );
};

export default NavigationBar;
