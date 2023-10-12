import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../context/ApiContext";
import { Container, Button } from 'react-bootstrap';
import "../styling/styles.css"
import LoadingImage from "./LoadingImage";

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

            setTimeout(() =>{
                setLoading(false);
            }, 1000);
        } catch(error){
            console.error(error);
            setError(error);
        } 
    }

    return (
        <Container className="quote-container">
            {error ? (
                <div>
                    <p>Error: {error.message}</p>
                </div>
            ) : (
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