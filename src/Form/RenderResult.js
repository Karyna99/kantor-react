const renderResult = ({targetAmount, outputCurrency}) => {
  return `${targetAmount.toFixed(2)} ${outputCurrency}`
};

export default renderResult;