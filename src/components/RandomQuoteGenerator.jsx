import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../context/ApiContext";

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
        <div>
            {error ? (
                <div>
                    <p>Error: {error.message}</p>
                </div>
            ) : (
                loading ? 'Loading...' : (
                    <div>
                        <h1>{quote}</h1>
                        <h2>---{author}</h2>
                    </div>
                )
            )}
            <button onClick={getRandomQuote}>
                Generate Random Quote
            </button>
        </div>
    );
}