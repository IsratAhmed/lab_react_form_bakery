import Cake from "./Cake";

const RecipeList = ({cakes}) => {

   return (
    <>
        <h3>Cake List</h3>
        <section>
        {
            cakes.map((cake, index) => {
                return <Cake key={index} cakeName={cake.cakeName} ingredients={cake.ingredients} rating={cake.rating}/>
            })
        }
        
        <h4>Average cake rating: </h4>
        <p>{(cakes.reduce((total, cake) => total + cake.rating, 0) / cakes.length)}</p>
        </section>
    </>
   );

}

export default RecipeList;