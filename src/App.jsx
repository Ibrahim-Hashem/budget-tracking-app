import Layout from './components/Layout';
import BudgetWidget from './components/BudgetWidget';

function App() {
  return (
    //nav bar
    <Layout>
      <div className="grid grid-cols-1 gap-2 items-start md:grid-cols-2 lg:grid-cols-3">
        <BudgetWidget />
        <BudgetWidget />
        <BudgetWidget />
        <BudgetWidget />
      </div>
    </Layout>
  );
}

export default App;
