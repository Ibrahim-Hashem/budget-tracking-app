import Container from './components/Container';
import Navbar from './components/Navbar';
import BudgetWidget from './components/BudgetWidget';

function App() {
  return (
    //nav bar
    <Container>
      <Navbar />
      <BudgetWidget />
    </Container>
  );
}

export default App;
