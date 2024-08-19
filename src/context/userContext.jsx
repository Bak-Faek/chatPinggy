import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUsername = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  const addUsername = (user) => {
    setUsername(user);
  };

  return (
    <UserContext.Provider value={{ username, addUsername }}>
      {children}
    </UserContext.Provider>
  );
};