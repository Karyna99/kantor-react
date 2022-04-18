import './App.css';
import Header from './Header';
import Form from './Form';
import Section from './Section';
import Container from './Container';
import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);

  const calculateResult = (
    value,
    toCurrency,
    rateFromCurrency,
    rateToCurrency
  ) => {
    setResult({
      finalValue: (+value * rateFromCurrency) / rateToCurrency,
      finalCurrency: toCurrency,
    });
  };

  return (
    <Container>
      <Header
        title="Kalkulator walut" />
      <Section
        body={<Form
          calculateResult={calculateResult}
          result={result} />}
      />
    </Container>
  );
}

export default App;
