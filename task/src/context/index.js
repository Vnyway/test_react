import { createContext, useState } from "react";
import { users } from "../constants";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [newUsers, setNewUsers] = useState(users);

  return (
    <UserContext.Provider value={{ newUsers, setNewUsers }}>
      {children}
    </UserContext.Provider>
  );
};
