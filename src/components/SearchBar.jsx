import { useNavigate } from 'react-router-dom';

export default function SearchBar(){
    const navigate = useNavigate();
    
    const handleSearch = (event) => {
        event.preventDefault();
        const query = event.target.query.value; 
        navigate(`?tag={query}`);
    }   

    return(
        <form onSubmit={handleSearch}>
            <input type="text" name="query" placeholder="Enter a category" />
            <button type="submit">Search</button>
        </form>
    );
}