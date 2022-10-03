const Cake = ({cakeName, ingredients, rating}) => {
    return (
        <div className="cake">
            <header>Cake Name: {cakeName} </header>
            <main>
                <ul>
                    <li>Ingredients: {ingredients} </li>
                    <li>Rating: {rating} </li>
                </ul>
            </main>
        </div>
    )
}

export default Cake;