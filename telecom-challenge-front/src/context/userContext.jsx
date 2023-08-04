/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [dniInput, setDniInput] = useState(0);

  return (
    <UserContext.Provider value={{ dniInput, setDniInput }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
