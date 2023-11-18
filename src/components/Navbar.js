import { NavLink } from "react-router-dom";

const Navbar = ({
  searchHandler,
  searchQuery,
  setSearchQuery,
  inputField,
  savedItems,
}) => {
  // manupulating nav active class
  const navActive = ({ isActive }) => {
    return {
      color: isActive ? "#14532D" : null,
    };
  };

  return (
    <div className="navbar flex justify-between items-center container mx-auto py-8 flex-col lg:flex-row gap-5 lg:gap-0">
      <NavLink
        end
        to="/"
      >
        <h2 className="logo text-2xl font-bold lowercase italic">
          MITIT<span className="text-green-500">food</span>
        </h2>
      </NavLink>
      <form className="search-bar" onSubmit={searchHandler}>
        <input
          ref={inputField}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          placeholder="Пошук рецепту..."
          required
          className="bg-white/75 p-3 px-8 lg:w-96 rounded-full outline-none shadow-lg shadow-gray-100 focus:shadow-gray-200 duration-300"
        />
      </form>
      <ul className="menu flex gap-5">
        <li>
          <NavLink
            style={navActive}
            end
            to="/"
            className="text-gray-400 hover:text-gray-600 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={navActive}
            to="/favourites"
            className="text-gray-400 hover:text-gray-600 duration-300"
          >
            Favourites
            <span className="favourites-count font-bold text-sky-400">
              ({savedItems.length})
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
