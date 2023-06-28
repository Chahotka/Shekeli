import '../styles/App.scss'
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { CurrencyProvider } from './context/CurrencyContext';

function App() {
  return (
    <>
      <CurrencyProvider>
        <Header />
        <Main />
        <Footer />
      </CurrencyProvider>
    </>
  );
}

export default App;
