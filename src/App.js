import './App.css';
import Header from './Header';
import Form from './Form';
import Section from './Section';
import Container from './Container';
import Date from './Date';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header
          title="Kalkulator walut" />
        <Section
          body={<Form />}
        />
        <Date />
      </Container>
    </ThemeProvider>
  );
}

export default App;
