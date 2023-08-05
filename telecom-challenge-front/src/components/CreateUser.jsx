import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

const CreateUser = () => {
  const { showCreate, setShowCreate, triggerRequest, setTriggerRequest } =
    useContext(UserContext);
  const [newClient, setNewClient] = useState({
    dni: 0,
    nombre: "",
    apellido: "",
    sexo: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setNewClient((prevData) => ({ ...prevData, [name]: value }));
  };

  const createClient = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/createuser",
        newClient
      );
      console.log(response);
      setTriggerRequest(!triggerRequest);
      setShowCreate(!showCreate);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se ha creado el nuevo cliente",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
      toast("Por favor verifique los campos ingresados");
    }
  };

  return (
    <div className="w-full">
      <form
        className="w-full flex justify-evenly text-start py-2"
        onSubmit={createClient}
      >
        <input
          className="w-16 md:w-24 border border-gray-300 rounded-md ps-2 "
          type="number"
          name="dni"
          onChange={handleChange}
        />
        <input
          className="w-16 md:w-24 border border-gray-300 rounded-md ps-2"
          type="text"
          name="nombre"
          onChange={handleChange}
        />
        <input
          className="w-16 md:w-24 border border-gray-300 rounded-md ps-2"
          type="text"
          name="apellido"
          onChange={handleChange}
        />
        <select
          onChange={handleChange}
          name="sexo"
          className="w-16 md:w-24 border border-gray-300 rounded-md ps-2"
        >
          <option defaultValue="">sexo</option>
          <option value="masculino">masculino</option>
          <option value="femenino">femenino</option>
        </select>
        <input
          className="w-16 md:w-24 border border-gray-300 rounded-md ps-1"
          type="text"
          name="telefono"
          onChange={handleChange}
        />
        <button
          className="text-green-700 rounded-md w-16 md:w-24 border border-green-700 bg-green-200 transition-all hover:bg-white"
          type="submit"
        >
          Crear
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowCreate(!showCreate);
          }}
          className="text-red-700 rounded-md w-16 md:w-24 border border-red-700 bg-red-200 transition-all hover:bg-white"
        >
          Eliminar
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default CreateUser;
