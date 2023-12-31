import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto py-8 flex flex-col items-center gap-5">
      <p className="text-2xl lg:text-4xl text-center font-semibold text-green-300 leading-normal">
        Сторінка пуста!
      </p>
      <Link
        to="/"
        className="bg-sky-400 text-sky-50 p-3 px-8 rounded-full uppercase shadow-lg shadow-sky-200 hover:bg-gray-600 hover:text-gray-50 hover:shadow-gray-300 duration-300"
      >
        Додому
      </Link>
    </div>
  );
};

export default NotFound;
