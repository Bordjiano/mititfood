import Recipe from "./Recipe";

const Favourites = ({ savedItems }) => {
  return (
    <div className="favoutite-section ">
      <div className="favourite-text text-2xl lg:text-4xl font-semibold text-center py-8 capitalize leading-normal">
        {savedItems.length === 0 ? (
          <p>Ваш список улюблених страв пустий!</p>
        ) : (
          <p>Ваш список улюблених страв{savedItems.length !== 1 ? "s" : null}</p>
        )}
      </div>

      <div className="favourite-items container mx-auto py-10 flex flex-wrap gap-10 justify-center">
        {savedItems.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
