import { useContext } from "react";
import { UserContext } from "../context/userContext";

const CreateButton = () => {
  const { showCreate, setShowCreate } = useContext(UserContext);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setShowCreate(!showCreate);
      }}
      className="btn w-28 md:w-auto lg:mt-32 outline-none border-2 border-gray-500 rounded-md bg-gray-700 text-white text-opacity-80 hover:text-black"
    >
      Crear nuevo cliente
    </button>
  );
};

export default CreateButton;
