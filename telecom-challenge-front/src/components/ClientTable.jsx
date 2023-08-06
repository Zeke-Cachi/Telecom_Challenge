import axios from "axios";
import Swal from "sweetalert2";
import ClientList from "./ClientList";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import CreateUser from "./CreateUser";
import { FaExclamationCircle } from "react-icons/fa";

const ClientTable = () => {
  const {
    dniInput,
    triggerRequest,
    setTriggerRequest,
    clientData,
    showCreate,
  } = useContext(UserContext);

  const [filteredClients, setFilteredClients] = useState(-1);

  //ESTE USEEFFECT ES PARA VERIFICAR CUANDO DEBE MOSTRARSE EL CARTEL DE "NO SE ENCONTRÓ DNI",
  //YA QUE DE OTRO MODO LO HUBIERA MOSTRADO ANTES DE LA BÚSQUEDA
  useEffect(() => {
    const checkClients = clientData.filter((client) =>
      client.dni.toString().includes(dniInput.toString())
    );
    setFilteredClients(checkClients.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dniInput]);

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
        <div className="relative">
          <h1 className="text-[3rem] mb-8">Listado de clientes</h1>
          <hr className="absolute top-[4rem] w-[24.5rem] h-1 border-full animate-extend bg-orange-300" />
        </div>

        <table className="w-11/12">
          <thead className="flex justify-center w-full">
            <tr className="flex justify-evenly w-full pb-2">
              <th className="w-16 lg:w-24 text-start">DNI</th>
              <th className="w-16 lg:w-24 text-start">Nombre</th>
              <th className="w-16 lg:w-24 text-start">Apellido</th>
              <th className="w-16 lg:w-24 text-start">Sexo</th>
              <th className="w-16 lg:w-24 text-start">Teléfono</th>
              <th className="w-16 lg:w-24 text-center">Editar</th>
              <th className="w-16 lg:w-24 text-center">Borrar</th>
            </tr>
          </thead>
          <hr className="w-11/12 mx-auto bg-gray-800 h-px" />
          <tbody>
            {showCreate && <CreateUser />}

            {/* TODO LO SIGUIENTE ES EL RENDERIZADO CONDICIONAL DE LA BÚSQUEDA POR DNI */}
            {dniInput !== 0 &&
              clientData
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
                })}

            {dniInput !== 0 && filteredClients === 0 && (
              <div className="w-full flex flex-col justify-around items-center my-32">
                <FaExclamationCircle className="h-32 w-32 text-red-500" />
                <h3 className="text-2xl mt-4">No se ha encontrado el DNI</h3>
              </div>
            )}

            {dniInput === 0 &&
              clientData.map((client, i) => {
                return (
                  <ClientList client={client} key={i} onDelete={deleteClient} />
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ClientTable;
