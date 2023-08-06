import { useContext } from "react";
import { UserContext } from "../context/userContext";

const SearchBar = () => {
  const { setDniInput } = useContext(UserContext);

  const handleChange = (e) => {
    const { value } = e.target;
    setDniInput(value);
  };

  return (
    <form className="flex flex-col lg:justify-around">
      <label
        htmlFor="dni"
        className="text-white text-opacity-80 text-sm md:text-lg"
      >
        Búsqueda por DNI
      </label>
      <input
        type="number"
        name="dni"
        placeholder="Ingrese DNI"
        onChange={handleChange}
        className="outline-none border-2 border-gray-500 rounded-md bg-gray-700 text-white text-opacity-80 p-1 lg:my-4 w-28 md:w-auto"
      />
    </form>
  );
};

export default SearchBar;
