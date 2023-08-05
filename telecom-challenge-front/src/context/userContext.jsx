/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [dniInput, setDniInput] = useState(0);
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
        console.log(jsonResponse);
        setClientData(jsonResponse);
      } catch (error) {
        console.log(error);
      }
    };
    getAllData();
  }, [triggerRequest]);

  return (
    <UserContext.Provider
      value={{
        dniInput,
        setDniInput,
        triggerRequest,
        setTriggerRequest,
        clientData,
        setClientData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
