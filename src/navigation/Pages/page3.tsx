import '../../assets/style/Page3.css'
import { useCalculatorDisplay } from '../../hooks/useCalculatorDisplay';

const Page3: React.FC = () => {
  const {displayContent} = useCalculatorDisplay();

  return (
    <div className='page-container'>
      <h1>Page 3</h1>
      <p>{displayContent}</p>
    </div>
  );
}

export default Page3;
