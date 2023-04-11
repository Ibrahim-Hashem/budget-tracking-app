import Layout from './components/Layout';
import { BudgetsProvider } from './context/BudgetsContext';
import MainContainer from './components/MainContainer';

function App() {
  return (
    //nav bar
    <BudgetsProvider>
      <Layout>
        <MainContainer />
      </Layout>
    </BudgetsProvider>
  );
}

export default App;
