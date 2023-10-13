import './styling/App.css';
import RandomQuoteGenerator from './components/RandomQuoteGenerator';
import ThreeDText from './3DText';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';
import SearchBar from './components/SearchBar';

function App() {

  // useLocation hook to capture the current URL location, which contains query parameters
  const location = useLocation();
  // Creates a searchParams object using the URL query string extracted from location object
  const searchParams = new URLSearchParams(location.search);
  // Retrieves the value of 'tag' parameter from the query string. 
  // This parameter is set by the URL through the query string
  // E.g. '?tag=History`. query will equal 'History'
  // value of the tag is stored in query
  const query = searchParams.get('tag');

  return (
    <div className="App">
      <ThreeDText />
      <div className="fade-in-text">
        <img className="image-slogan inline-content" src={require('./images/owl.gif')} alt="owl" />
        <h1 className="inline-content">Roam the Wilderness of Wisdom</h1>
        <img className="image-slogan inline-content" src={require('./images/elephant.gif')} alt="owl" />
      </div>
      {/* pass the query variable as a prop*/}
      {/* Allows component to fetch quotes based on the 'tag' parameter from the URL query string */}
      {/* Filter and display quotes based on the category specified in URL. */}
      {/* Retrieved from useLocation and URLSearchParams */}
      <RandomQuoteGenerator query={query} />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
