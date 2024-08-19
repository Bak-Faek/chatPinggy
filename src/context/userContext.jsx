import { createContext, useContext, useState } from "react";

const UserContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useUsername = () => useContext(UserContext);

// eslint-disable-next-line react/prop-types
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