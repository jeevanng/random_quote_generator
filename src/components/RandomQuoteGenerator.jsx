import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../context/ApiContext";

export default function RandomQuoteGenerator(){

    // Loading state
    const [loading, setLoading] = useState(true);

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
        setLoading(true);
        try{
            let response = await fetch(api);
            let responseData = await response.json();
            setQuote(responseData[0].content);
            setAuthor(responseData[0].author);
        } catch(error){
            console.error(error);
        }
        setLoading(false);
    }

    return(
        <div>
            {loading ? 'Loading...' : (
                <div>
                    {quote && 
                    <div>
                        <h1>{quote}</h1>
                    </div> 
                    },
                    {author &&
                    <div>
                        <h2>---{author}</h2>
                    </div>
                    }
                </div>
            )}

            <div>
                <button onClick={getRandomQuote}>
                    Generate Random Quote
                </button>
            </div>
            
        </div>
    )
}