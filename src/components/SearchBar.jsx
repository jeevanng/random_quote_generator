import { useNavigate } from 'react-router-dom';
import "../styling/SearchBar.css";

const defaultCategories = [
    {
        label: "ALL CATEGORIES",
        value: "", // Blank value
    },
    {
        label: "Age",
        value: "Age",
    },
    {
        label: "Business",
        value: "Business",
    },
    {
        label: "Change",
        value: "Change",
    },
    {
        label: "Character",
        value: "Character",
    },
    {
        label: "Competition",
        value: "Competition",
    },
    {
        label: "Conservative",
        value: "Conservative",
    },
    {
        label: "Courage",
        value: "Courage",
    },
    {
        label: "Creativity",
        value: "Creativity",
    },
    {
        label: "Education",
        value: "Education",
    },
    {
        label: "Ethics",
        value: "Ethics",
    },
    {
        label: "Failure",
        value: "Failure",
    },
    {
        label: "Faith",
        value: "Faith",
    },
    {
        label: "Family",
        value: "Family",
    },
    {
        label: "Famous Quotes",
        value: "Famous Quotes",
    },
    {
        label: "Film",
        value: "Film",
    },
    {
        label: "Freedom",
        value: "Freedom",
    },
    {
        label: "Friendship",
        value: "Friendship",
    },
    {
        label: "Future",
        value: "Future",
    },
    {
        label: "Generosity",
        value: "Generosity",
    },
    {
        label: "Genius",
        value: "Genius",
    },
    {
        label: "Gratitude",
        value: "Gratitude",
    },
    {
        label: "Happiness",
        value: "Happiness",
    },
    {
        label: "Health",
        value: "Health",
    },
    {
        label: "History",
        value: "History",
    },
    {
        label: "Honor",
        value: "Honor",
    },
    {
        label: "Humorous",
        value: "Humorous",
    },
    {
        label: "Imagination",
        value: "Imagination",
    },
    {
        label: "Inspirational",
        value: "Inspirational",
    },
    {
        label: "Knowledge",
        value: "Knowledge",
    },
    {
        label: "Leadership",
        value: "Leadership",
    },
    {
        label: "Life",
        value: "Life",
    },
    {
        label: "Literature",
        value: "Literature",
    },
    {
        label: "Love",
        value: "Love",
    },
    {
        label: "Mathematics",
        value: "Mathematics",
    },
    {
        label: "Motivational",
        value: "Motivational",
    },
    {
        label: "Nature",
        value: "Nature",
    },
    {
        label: "Opportunity",
        value: "Opportunity",
    },
    {
        label: "Pain",
        value: "Pain",
    },
    {
        label: "Perseverance",
        value: "Perseverance",
    },
    {
        label: "Philosophy",
        value: "Philosophy",
    },
    {
        label: "Politics",
        value: "Politics",
    },
    {
        label: "Power Quotes",
        value: "Power Quotes",
    },
    {
        label: "Religion",
        value: "Religion",
    },
    {
        label: "Sadness",
        value: "Sadness",
    },
    {
        label: "Science",
        value: "Science",
    },
    {
        label: "Self",
        value: "Self",
    },
    {
        label: "Self Help",
        value: "Self Help",
    },
    {
        label: "Social Justice",
        value: "Social Justice",
    },
    {
        label: "Society",
        value: "Society",
    },
    {
        label: "Spirituality",
        value: "Spirituality",
    },
    {
        label: "Sports",
        value: "Sports",
    },
    {
        label: "Stupidity",
        value: "Stupidity",
    },
    {
        label: "Success",
        value: "Success",
    },
    {
        label: "Technology",
        value: "Technology",
    },
    {
        label: "Time",
        value: "Time",
    },
    {
        label: "Tolerance",
        value: "Tolerance",
    },
    {
        label: "Truth",
        value: "Truth",
    },
    {
        label: "Virtue",
        value: "Virtue",
    },
    {
        label: "War",
        value: "War",
    },
    {
        label: "Weakness",
        value: "Weakness",
    },
    {
        label: "Wellness",
        value: "Wellness",
    },
    {
        label: "Wisdom",
        value: "Wisdom",
    },
    {
        label: "Work",
        value: "Work",
    },
];
export default function SearchBar(){
    const navigate = useNavigate();
    
    const handleSearch = (event) => {
        event.preventDefault();
        const query = event.target.query.value; 
        navigate(`?tag=${query}`);
    }   

    const handleSelectChange = (event) => {
        const query = event.target.value;
        navigate(`?tag=${query}`);
    }

    return (
        <form className="drop-down-menu" onSubmit={handleSearch}>
            <select name="query" onChange={handleSelectChange}>
                {defaultCategories.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                    ))}
            </select>
        </form>
    );
}