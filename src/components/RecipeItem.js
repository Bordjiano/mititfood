import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Spinner from "./Spinner";
import { GiKnifeFork } from "react-icons/gi";
import { BsClock, BsPerson } from "react-icons/bs";

const RecipeItem = ({ favouriteHandler, savedItems }) => {
  const { id } = useParams();
  const { data: recipe, loading, error } = useFetch(id); // calling custom hook to get the specific recipe item

  const [itemsSavedStatus, setItemsSavedStatus] = useState(null);

  // Cooking time calculation
  const durationCalc = (duration) => {
    if (!duration) return;

    if (!String(duration).includes(".")) {
      return duration + "год";
    }

    if (String(duration).includes(".")) {
      const splittedDuration = String(duration).split(".");
      const hour = splittedDuration[0] + "год";
      const splittedMinutes = "." + splittedDuration[1];
      const minutes = String(+splittedMinutes * 60) + "хв";

      return hour + minutes;
    }
  };

  // Depending on each recipe, automatically update the state of saved items
  useEffect(() => {
    if (!recipe) return;
    setItemsSavedStatus(savedItems.some((item) => item.id === recipe.id));
  }, [recipe]);

  return (
    <div className="recipe-item-wrapper">
      {loading ? (
        <p>{error ? error : <Spinner />}</p>
      ) : (
        <div className="recipe-item container mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="left row-start-2 lg:row-start-auto">
            <div className="img overflow-hidden flex justify-center items-center h-96 rounded-xl border shadow-md group">
              <img
                className="w-full block rounded-xl group-hover:scale-105 duration-300"
                src={recipe?.image_url}
                alt={recipe?.title}
              />
            </div>
            <div className="ingredients mt-10">
              <h2 className="ing-title text-2xl lg:text-4xl font-medium mb-5 flex gap-3 items-center">
                <span className="text-green-500">
                  <GiKnifeFork />
                </span>{" "}
                Інгредієнти:
              </h2>
              <hr className="border-green-100" />
              <ul className="flex flex-col gap-2 mt-5">
                {recipe?.ingredients?.map((ing, i) => (
                  <li key={i}>
                    ✔ {ing.quantity} {ing.unit} {ing.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right flex flex-col gap-5">
            <span className="publisher uppercase tracking-widest font-semibold text-sky-400 ">
              {recipe?.publisher}
            </span>
            <h2 className="title text-5xl capitalize">{recipe?.title}</h2>
            <div className="servings-cooking-time flex gap-5 uppercase tracking-widest font-semibold text-green-500">
              <div className="servings flex gap-2 items-center">
                <BsPerson />
                Розраховання для : {recipe?.servings} людей
              </div>
              <div className="cooking-time flex gap-2 items-center">
                <BsClock />
                Час приготування :{" "}
                {recipe?.cooking_time < 60
                  ? String(recipe?.cooking_time) + "хв"
                  : durationCalc(recipe?.cooking_time / 60)}
              </div>
            </div>
            <div className="btns flex gap-5">
              <button
                onClick={() => favouriteHandler(recipe?.id)}
                className={`bg-gradient-to-br p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-2 inline-block shadow-md hover:shadow-lg duration-300 ${
                  itemsSavedStatus
                    ? " from-orange-400 to-orange-600 text-orange-50  shadow-orange-200  hover:shadow-orange-300"
                    : " from-sky-400 to-sky-600 text-sky-50  shadow-sky-200  hover:shadow-sky-300"
                }`}
              >
                {itemsSavedStatus
                  ? "- Видалити з улюблених"
                  : "+ Зберегти в улюблені"}
              </button>

              <Link
                className="bg-gradient-to-br from-green-400 to-green-600 text-green-50 p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-2 inline-block shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-300 duration-300"
                to="/"
              >
                Додому
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeItem;
