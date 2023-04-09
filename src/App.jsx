import Layout from './components/Layout';
import BudgetWidget from './components/BudgetWidget';
import { BudgetsProvider } from './context/BudgetsContext';
import WidgetWrapper from './components/WidgetWrapper';

function App() {
  return (
    //nav bar
    <BudgetsProvider>
      <Layout>
        <WidgetWrapper>
          <BudgetWidget />
        </WidgetWrapper>
      </Layout>
    </BudgetsProvider>
  );
}

export default App;
