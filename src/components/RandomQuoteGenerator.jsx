import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../context/ApiContext";

export default function RandomQuoteGenerator(){

    // Search results
    const [quote, setQuote] = useState([]);
    const [author, setAuthor] = useState([]);

    // Api URL
    const {api} = useContext(ApiContext);

    useEffect(() => {
        console.log("Making a fetch request")
        apiRequest();
    }, []);

    async function apiRequest(){
        let response = await fetch(api);
        let responseData = await response.json();
        setQuote(responseData[0].content);
        setAuthor(responseData[0].author);
    }

    return(
        <div>
            {quote.length > 0 && 
            <div>
                <h1>{quote}</h1>
            </div>
            }
            {author.length > 0 && 
            <div>
                <h2>---{author}</h2>
            </div>
            }
            <button>Click Me</button>
        </div>
    )
}