import React, { useContext } from 'react';
import '../../assets/style/Page3.css'
import { useCalculatorContext } from '../CalculatorContext';

const Page3: React.FC = () => {
  const {displayContent} = useCalculatorContext();

  return (
    <div className='page-container'>
      <h1>Page 3</h1>
      <p>{displayContent}</p>
    </div>
  );
}

export default Page3;
