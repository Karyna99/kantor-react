import './App.css';
import Header from './Header';
import Form from './Form';
import Section from './Section';
import Result from './Result';
import Container from './Container';

function App() {
  return (
   <Container>
     <Header 
     title="Kalkulator walut" />
     <Section
     title="Przelicz walutę"
     body={<Form />}
     extraContent={<Result />}
     />
   </Container>
  );
}

export default App;
