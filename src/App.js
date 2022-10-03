import RecipeContainer from './containers/RecipeContainer';
import Search from "./Search";
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
        <Search />
        <RecipeContainer />
      </main>
    </>
  );
}

export default App;
