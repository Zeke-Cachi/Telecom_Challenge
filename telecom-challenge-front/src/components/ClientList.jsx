/* eslint-disable react/prop-types */
import { FaEdit, FaRegWindowClose, FaCheck, FaTimes } from "react-icons/fa";
import { useState } from "react";

const ClientList = ({ client, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <>
      <tr
        className={`flex justify-evenly w-full py-2 ${
          showEdit ? "hidden" : "block"
        }`}
      >
        <td className="w-24">{client.dni}</td>
        <td className="w-24">{client.nombre}</td>
        <td className="w-24">{client.apellido}</td>
        <td className="w-24">{client.sexo}</td>
        <td className="w-24">{client.telefono}</td>
        <td className="w-24">
          <button className="text-green-600 w-full">
            <FaEdit
              className="mx-auto h-[1.2rem] w-[1.2rem] transition-all hover:scale-125"
              onClick={() => {
                setShowEdit(!showEdit);
              }}
            />
          </button>
        </td>
        <td className="w-24">
          <button
            className="text-red-500 w-full rounded-md ps-2"
            onClick={(e) => onDelete(e, client.dni)}
          >
            <FaRegWindowClose className="mx-auto h-[1.2rem] w-[1.2rem] transition-all hover:scale-125" />
          </button>
        </td>
      </tr>

      <div className={`${!showEdit ? "hidden" : "block"} w-full`}>
        <form className="w-full flex justify-evenly text-start py-2">
          <input
            className="w-24 bg-red-500 text-black"
            type="text"
            readOnly
            placeholder={client.dni}
          />
          <input
            className="w-24 border border-gray-300 rounded-md ps-2"
            type="text"
            placeholder={client.nombre}
          />
          <input
            className="w-24 border border-gray-300 rounded-md ps-2"
            type="text"
            placeholder={client.apellido}
          />
          <input
            className="w-24 border border-gray-300 rounded-md ps-2"
            type="text"
            placeholder={client.sexo}
          />
          <input
            className="w-24 border border-gray-300 rounded-md ps-2"
            type="text"
            placeholder={client.telefono}
          />
          <button className="text-green-600 w-24">
            <FaCheck className="mx-auto" />
          </button>
          <button className="text-red-500 w-24">
            <FaTimes className="mx-auto" />
          </button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto bg-gray-200 h-px" />
    </>
  );
};

export default ClientList;
