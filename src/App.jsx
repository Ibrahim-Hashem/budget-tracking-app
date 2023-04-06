import Layout from './components/Layout';
import BudgetWidget from './components/BudgetWidget';
import { BudgetsProvider } from './context/BudgetsContext';
import WidgetWrapper from './components/WidgetWrapper';

function App() {
  return (
    //nav bar
    <Layout>
      <BudgetsProvider>
        <WidgetWrapper>
          <BudgetWidget />
        </WidgetWrapper>
      </BudgetsProvider>
    </Layout>
  );
}

export default App;
