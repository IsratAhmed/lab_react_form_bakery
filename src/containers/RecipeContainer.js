import { useState } from "react"
import RecipeList from "../components/RecipeList";
import NewCake from "../components/NewCake";

const RecipeContainer = () => {
    const [cakes, setCakes] = useState([
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ]);

    const [applicationsOpen, setApplicationOpen] = useState(true);
    const [searchName, setSearchName] = useState("");

    const handleSearchNameChange = (event) => {
        setSearchName(event.target.value);
    }

    const handleSearchFormSubmission = (event) => {
        event.preventDefault();
        console.log("Search submitted");
        const results = cakes.filter((cake) => {
            return cake.cakeName.includes(searchName);
        })
        setCakes(results);
    }

    const addNewCake = (newCake) => {

        const updatedCakes = [...cakes, newCake]

        if(applicationsOpen) {
            setCakes(updatedCakes);
        }
    }

    return (
        <>
        <form onSubmit={handleSearchFormSubmission}>
            <label>Search for a cake:</label>
            <input type="text" placeholder="Search by name" onChange={handleSearchNameChange} value={searchName}/>
            <input type="submit" value="Search" />
        </form>
        <h2>Cake Directory</h2>
        <NewCake onSubmit={addNewCake} />
        <RecipeList cakes={cakes} />
        </>
    )
}



export default RecipeContainer;