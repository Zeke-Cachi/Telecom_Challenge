/* eslint-disable react/prop-types */
import { FaEdit, FaRegWindowClose, FaCheck, FaTimes } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

const ClientList = ({ client, onDelete }) => {
  const { triggerRequest, setTriggerRequest } = useContext(UserContext);

  const [showEdit, setShowEdit] = useState(false);
  const [editedData, setEditedData] = useState({
    nombre: client.nombre,
    apellido: client.apellido,
    sexo: client.sexo,
    telefono: client.telefono,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const editUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3001/edituser/${client.dni}`,
        editedData
      );
      console.log(response);
      setTriggerRequest(!triggerRequest);
      setShowEdit(!showEdit);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Cliente editado!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
      toast("Verifique los campos ingresados");
    }
  };

  return (
    <>
      <tr
        className={`flex justify-evenly w-full py-2 ${
          showEdit ? "hidden" : "block"
        }`}
      >
        <td className="w-16 lg:w-24">{client.dni}</td>
        <td className="w-16 lg:w-24">{client.nombre}</td>
        <td className="w-16 lg:w-24">{client.apellido}</td>
        <td className="w-16 lg:w-24">{client.sexo}</td>
        <td className="w-16 lg:w-24">{client.telefono}</td>
        <td className="w-16 lg:w-24">
          <button className="text-green-600 w-full">
            <FaEdit
              className="mx-auto h-[1.2rem] w-[1.2rem] transition-all hover:scale-125"
              onClick={() => {
                setShowEdit(!showEdit);
              }}
            />
          </button>
        </td>
        <td className="w-16 lg:w-24">
          <button
            className="text-red-500 w-full rounded-md ps-2"
            onClick={(e) => onDelete(e, client.dni)}
          >
            <FaRegWindowClose className="mx-auto h-[1.2rem] w-[1.2rem] transition-all hover:scale-125" />
          </button>
        </td>
      </tr>

      {/* FORMULARIO PARA EDITAR CLIENTE */}
      <div className={`${!showEdit ? "hidden" : "block"} w-full`}>
        <form
          className="w-full flex justify-evenly text-start py-2"
          onSubmit={editUser}
        >
          <input
            className="w-16 lg:w-24 bg-red-500 placeholder:text-black rounded-md ps-2 "
            type="text"
            readOnly
            placeholder={client.dni}
          />
          <input
            className="w-16 lg:w-24 border border-gray-300 rounded-md ps-2"
            type="text"
            name="nombre"
            placeholder={client.nombre}
            onChange={handleChange}
          />
          <input
            className="w-16 lg:w-24 border border-gray-300 rounded-md ps-2"
            type="text"
            name="apellido"
            placeholder={client.apellido}
            onChange={handleChange}
          />

          <select
            onChange={handleChange}
            name="sexo"
            className="w-16 lg:w-24 border border-gray-300 rounded-md ps-2"
          >
            <option placeholder="">seleccione</option>
            <option value="masculino">masculino</option>
            <option value="femenino">femenino</option>
          </select>

          <input
            className="w-16 lg:w-24 border border-gray-300 rounded-md ps-1"
            type="text"
            name="telefono"
            placeholder={client.telefono}
            onChange={handleChange}
          />
          <button className="text-green-600 w-16 lg:w-24" type="submit">
            <FaCheck className="mx-auto" />
          </button>
          <button className="text-red-500 w-16 lg:w-24">
            <FaTimes
              className="mx-auto"
              onClick={(e) => {
                e.preventDefault();
                setShowEdit(!showEdit);
              }}
            />
          </button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto bg-gray-200 h-px" />
      <Toaster />
    </>
  );
};

export default ClientList;
