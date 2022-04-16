import './App.css';
import Header from './Header';
import Form from './Form';
import Section from './Section';
import Result from './Result';
import Container from './Container';
import { useState, useMemo } from "react"

function App() {
  const [value, setValue] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("Wybierz walutę");
  const [toCurrency, setToCurrency] = useState("Wybierz walutę");
  const [currencies] = useState(["EUR", "USD", "CHF", "GBP"]);
  const [result, setResult] = useState(0);

  return (
   <Container>
     <Header 
     title="Kalkulator walut" />
     <Section
     body={<Form />}
     extraContent={<Result />}
     />
   </Container>
  );
}

export default App;
