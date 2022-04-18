const renderResult = ({ result }) => {
  if (!result) {
    return <span>N/a</span>
  }
  return (
    <span>
      {result.finalValue.toFixed(2)}&nbsp;{result.finalCurrency}
    </span>
  )
}

export default renderResult;