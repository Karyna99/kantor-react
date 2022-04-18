const RenderResult = ({ result }) => {
  if (!result) {
    return <span className="result">N/A</span>;
  }
  return (
    <span className="result">
      {result.finalValue.toFixed(2)}&nbsp;{result.finalCurrency}
    </span>
  );
};

export default RenderResult;