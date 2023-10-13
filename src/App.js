import './styling/App.css';
import RandomQuoteGenerator from './components/RandomQuoteGenerator';
import ThreeDText from './3DText';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <ThreeDText />
      <div className="fade-in-text">
        <img className="image-slogan inline-content" src={require('./images/owl.gif')} alt="owl" />
        <h1 className="inline-content">Roam the Wilderness of Wisdom</h1>
        <img className="image-slogan inline-content" src={require('./images/elephant.gif')} alt="owl" />
      </div>
      <RandomQuoteGenerator />
      <Footer />
    </div>
  );
}

export default App;
