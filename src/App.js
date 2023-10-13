import './styling/App.css';
import RandomQuoteGenerator from './components/RandomQuoteGenerator';
import ThreeDText from './3DText';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';
import SearchBar from './components/SearchBar';

function App() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('tag');

  return (
    <div className="App">
      <ThreeDText />
      <div className="fade-in-text">
        <img className="image-slogan inline-content" src={require('./images/owl.gif')} alt="owl" />
        <h1 className="inline-content">Roam the Wilderness of Wisdom</h1>
        <img className="image-slogan inline-content" src={require('./images/elephant.gif')} alt="owl" />
      </div>
      <RandomQuoteGenerator query={query} />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
