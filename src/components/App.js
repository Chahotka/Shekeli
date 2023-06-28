import '../styles/App.scss'
import Header from './Header';
import Main from './Main';
import { CurrencyProvider } from './context/CurrencyContext';

function App() {
  return (
    <>
      <CurrencyProvider>
        <Header />
        <Main />
      </CurrencyProvider>
    </>
  );
}

export default App;
