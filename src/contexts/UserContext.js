import React, { createContext, useState } from "react";
export const UserContext = createContext();

function UserContextProvider(props) {
  const [userData, setUserData] = useState({});
  const updateUserData = (response) => {
    setUserData({ ...response });
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData: updateUserData }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
