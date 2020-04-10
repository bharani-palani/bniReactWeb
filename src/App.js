import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import MainApp from "./components/menu/MainApp";
import AppContext from "./AppContext";
import apiInstance from "./apiServices";

import "./style.css";

function App() {
  const [value, setValue] = useState({});
  const getData = async() => {
    await apiInstance.get("/").then(response => {
      setValue(response.data.response[0])
    })
    .catch(error => console.log(error))
    .finally(() => false);
  }

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <AppContext.Provider value={[value, setValue]}>
      <MainApp />
    </AppContext.Provider>
  );
}

export default App;
