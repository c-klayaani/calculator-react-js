import React from 'react';
import '../../assets/style/Page2.css'
import { useCalculatorContext } from '../CalculatorContext';

const Page2: React.FC = () => {
  const { displayContent } = useCalculatorContext();

  return (
    <div className='page-container'>
      <h1>Page 2</h1>
      <p>Display Content from Calculator: {displayContent}</p>
    </div>
  );
};

export default Page2;