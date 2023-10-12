import './styling/App.css';
import RandomQuoteGenerator from './components/RandomQuoteGenerator';
import ThreeDText from './3DText';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <ThreeDText />
      <div className="fade-in-text">
        <h1>Roam the Wilderness of Wisdom</h1>
      </div>
      <RandomQuoteGenerator />
      <Footer />
    </div>
  );
}

export default App;
