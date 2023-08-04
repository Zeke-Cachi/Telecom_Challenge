import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ClientList from "./ClientList";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const ClientTable = () => {
  const { dniInput } = useContext(UserContext);

  const [triggerRequest, setTriggerRequest] = useState(true);
  const [clientData, setClientData] = useState([
    {
      dni: 0,
      nombre: "",
      apellido: "",
      sexo: "",
      telefono: "",
    },
  ]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/allusers");
        const jsonResponse = JSON.parse(response.data);
        setClientData(jsonResponse);
      } catch (error) {
        console.log(error);
      }
    };
    getAllData();
  }, [triggerRequest]);

  const deleteClient = async (e, dni) => {
    e.preventDefault();
    Swal.fire({
      title: "Esta seguro?",
      text: "No se podrá recuperar la información una vez borrada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.delete(
          `http://localhost:3001/deleteuser/${dni}`
        );
        console.log(response);
        setTriggerRequest(!triggerRequest);
        Swal.fire("Datos borrados", "Los datos han sido eliminados", "success");
      }
    });
  };

  return (
    <section className="flex justify-center w-full">
      <div className="mt-16 w-full flex flex-col items-center">
        <div>
          <h1 className="text-[3rem] mb-8">Listado de clientes</h1>
          <hr className="" />
        </div>

        <table className="w-11/12">
          <thead className="flex justify-center w-full">
            <tr className="flex justify-evenly w-full pb-2">
              <th className="w-24 text-start">DNI</th>
              <th className="w-24 text-start">Nombre</th>
              <th className="w-24 text-start">Apellido</th>
              <th className="w-24 text-start">Sexo</th>
              <th className="w-24 text-start">Teléfono</th>
              <th className="w-24 text-center">Editar</th>
              <th className="w-24 text-center">Borrar</th>
            </tr>
          </thead>
          <hr className="w-11/12 mx-auto bg-gray-800 h-px" />
          <tbody>
            {dniInput !== 0
              ? clientData
                  .filter((client) =>
                    client.dni.toString().includes(dniInput.toString())
                  )
                  .map((client, i) => {
                    return (
                      <ClientList
                        client={client}
                        key={i}
                        onDelete={deleteClient}
                      />
                    );
                  })
              : clientData.map((client, i) => {
                  return (
                    <ClientList
                      client={client}
                      key={i}
                      onDelete={deleteClient}
                    />
                  );
                })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ClientTable;
