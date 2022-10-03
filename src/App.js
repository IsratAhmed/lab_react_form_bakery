import RecipeContainer from './containers/RecipeContainer';
import NavBar from "./NavBar";
import Title from "./Title";

function App() {
  return (
    <>
      <header>
        <Title />
        <NavBar />
      </header>
      <main>
        <RecipeContainer />
      </main>
    </>
  );
}

export default App;
