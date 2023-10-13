import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../context/ApiContext";
import { Container, Button } from 'react-bootstrap';
import "../styling/styles.css"
import LoadingImage from "./LoadingImage";

export default function RandomQuoteGenerator({ query }){

    // Loading state
    // Start with a default value of true
    // That is, loading is occurring
    const [loading, setLoading] = useState(true);

    // Error state
    // Default state of null
    // No errors initially
    const [error, setError] = useState(null);

    // Search results
    const [quote, setQuote] = useState([]);
    const [author, setAuthor] = useState([]);

    // Api URL
    // Destructure api variable from the context. Accesses {api} value from ApiContext 
    const {api} = useContext(ApiContext);

    const apiUrl = query ? `${api}${query}` : 'https://api.quotable.io/quotes/random?tags=';

    // Run once, immediately after the component is rendered
    useEffect(() => {
        console.log("Making a fetch request")
        getRandomQuote();
    
    // eslint-disable-next-line    
    }, [query]);

    // Async function outside useEffect for easier debugging
    async function getRandomQuote(){
        try{
            // set loading state to be true before making fetch request
            // Indicate that component is in loading state
            setLoading(true);
            // make network request to the api 
            // wait for response
            let response = await fetch(apiUrl);
            // read response data as json, wait for data to be parsed
            let responseData = await response.json();
            // set 'quote' and 'author' state variables with data fetched from the api
            setQuote(responseData[0].content);
            setAuthor(responseData[0].author);

            // Set a timeout of 1 second (minimum) to change the 'loading' state variable to false
            // Brief loading delay to allow user to see loading animation
            setTimeout(() =>{
                setLoading(false);
            }, 1000);
            // Catch any errors, set 'error' state to the error object
        } catch(error){
            console.error(error);
            setError(error);
        } 
    }

    return (
        // Container is bootstrap UI for styling
        <Container className="quote-container">
            {/* Conditional Rendering */}
            {/* If there is an error, display an error message. OTHERWISE display main content */}
            {error ? (
                <div>
                    <p>Error: {error.message}</p>
                </div>
            ) : (
                // This will display if there is no error
                // Another conditional rendering
                // Reads loading state
                // If true, render the 'LoadingImage' component
                // If false, load the main content
                loading ? (<LoadingImage />) : (
                <figure className="text-center">
                    <blockquote className="blockquote">
                         <p className="content">"{quote}"</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                         <cite title="Source Title">{author}</cite>
                    </figcaption>
                  </figure>
                )
            )}
            <div>
                <Button className="fixed-button" variant="dark" onClick={getRandomQuote}>
                    Retrieve Random Quote
                </Button>
            </div>
        </Container>
    );
}
