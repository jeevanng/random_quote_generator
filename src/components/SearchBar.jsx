import { useNavigate } from 'react-router-dom';
import "../styling/SearchBar.css";

// Array containing all the tags in the API 
// label and value
// value was just so I could assign a blank value to "ALL CATEGORIES"
// This array will be used to populate a drop down box
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
    // Hook for navigation
    const navigate = useNavigate();
    
    // This function is called when the value of the dropdown menu changes
    const handleSelectChange = (event) => {
        // This extracts the selected value from the dropdown menu and stores it in a variable named "query"
        const query = event.target.value;
        // Using the navigate function to change the URL by adding a 'tag' query parameter with the selected category value
        navigate(`?tag=${query}`);
    }

    return (
        <form className="drop-down-menu">
            {/* Creates a dropdown (select) element */}
            {/* onChange event handler will trigger handleSelectChange function whenever a selected option changes */}
            <select name="query" onChange={handleSelectChange}>
                {/* Uses map method to iterate over my categories array */}
                {/* Two properties, option and index */}
                {/* option will be an object containing two keys "label" and "value" */}
                {defaultCategories.map((option, index) => (
                    // Key attribute for React
                    // value is equal to the "value" of the category array
                    <option key={index} value={option.value}>
                        {/* option.label is equal to the "label" of the category array */}
                        {option.label}
                    </option>
                    ))}
            </select>
        </form>
    );
}