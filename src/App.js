import './App.css';
import RandomQuoteGenerator from './components/RandomQuoteGenerator';
import ThreeDText from './3DText';

function App() {

  return (
    <div className="App">
      <ThreeDText />
      <div className="fade-in-text">
        <h1>Roam the Wilderness of Wisdom</h1>
      </div>
      <RandomQuoteGenerator />
    </div>
  );
}

export default App;
