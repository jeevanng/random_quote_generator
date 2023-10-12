import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../context/ApiContext";
import { Container, Button } from 'react-bootstrap';
import "../styles.css";

export default function RandomQuoteGenerator(){

    // Loading state
    const [loading, setLoading] = useState(true);

    // Error state
    const [error, setError] = useState(null);

    // Search results
    const [quote, setQuote] = useState([]);
    const [author, setAuthor] = useState([]);

    // Api URL
    const {api} = useContext(ApiContext);

    useEffect(() => {
        console.log("Making a fetch request")
        getRandomQuote();
    // eslint-disable-next-line    
    }, []);

    async function getRandomQuote(){
        try{
            setLoading(true);
            let response = await fetch(api);
            let responseData = await response.json();
            setQuote(responseData[0].content);
            setAuthor(responseData[0].author);
        } catch(error){
            console.error(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container className="quote-container">
            {error ? (
                <div>
                    <p>Error: {error.message}</p>
                </div>
            ) : (
                loading ? 'Loading...' : (
                <figure className="text-center">
                    <blockquote className="blockquote">
                        <p>{quote}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        <cite title="Source Title">{author}</cite>
                    </figcaption>
                  </figure>
                )
            )}
            <div>
                <Button className="fixed-button" variant="dark" onClick={getRandomQuote}>
                    Generate Random Quote
                </Button>
            </div>
        </Container>
    );
}