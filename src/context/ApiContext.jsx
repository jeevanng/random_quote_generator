import { createContext, useState } from "react";

export const ApiContext = createContext(null)

export default function ApiProvider({children}){
    
    const [apiUrl, setApiUrl] = useState("https://api.quotable.io/quotes/random");

    return(
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