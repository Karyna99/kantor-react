import './App.css';
import Header from './Header';
import Form from './Form';
import Section from './Section';
import Container from './Container';

function App() {

  return (
    <Container>
      <Header
        title="Kalkulator walut" />
      <Section
        body={<Form />}
      />
    </Container>
  );
}

export default App;
