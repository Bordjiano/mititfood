import Recipe from "./Recipe";
import Spinner from "./Spinner";

const Home = ({ recipes, loading, error }) => {
  return (
    <div className="home container mx-auto py-10 flex flex-wrap gap-10 justify-center">
      {/* condition for ideal position */}
      {!loading && !error && recipes.length === 0 ? (
        <div>
          <p className="text-2xl lg:text-4xl font-semibold">
            Web портал пошуку рецептів для військової їдальні!
          </p>
        </div>
      ) : null}

      {/* condition for loading position */}
      {loading && <p>{error ? error : <Spinner />}</p>}

      {/* condition after getting the recipes */}
      {recipes?.length > 0 &&
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Home;
