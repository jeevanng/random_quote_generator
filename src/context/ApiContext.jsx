import { createContext, useState } from "react";


export const ApiContext = createContext(null)

export default function ApiProvider({children}){
    
    // Start with default URL
    const [apiUrl, setApiUrl] = useState("https://api.quotable.io/quotes/random?tags=");

    return(
        // Provides the context values to it's descendants/children. Sets value prop to an object with two properties
        // Components nested within this context can access and modify the Api URL as needed. 
        <ApiContext.Provider value={
            {
                api: apiUrl, 
                setApi: setApiUrl
            }
        }>

        {children}

        </ApiContext.Provider>
    )
}