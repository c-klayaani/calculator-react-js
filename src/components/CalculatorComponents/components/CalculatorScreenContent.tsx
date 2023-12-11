type CalculatorScreenContentProps = {
  content: string;
  color: string;
};

const CalculatorScreenContent = (props: CalculatorScreenContentProps) => (
  <span style={{ color: props.color }}>{props.content}</span>
);

export default CalculatorScreenContent;