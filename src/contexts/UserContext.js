import React, { createContext, useState } from "react";
export const UserContext = createContext();

function UserContextProvider(props) {
  const [userData, setUserData] = useState({});
  const updateUserData = (response) => {
    setUserData({ ...response });
  };
  const removeUserData = () => {
    setUserData({});
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData: updateUserData, removeUserData: removeUserData }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
