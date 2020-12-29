import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import MainApp from "./components/mainApp/MainApp";
import AppContext from "./contexts/AppContext";
import UserContextProvider from "./contexts/UserContext";
import apiInstance from "./services/apiServices";
import ErrorService from "./components/wrapper/errorService";
import "./css/style.scss";

function App() {
  const [value, setValue] = useState({});
  const [fetchStatus, setFetchStatus] = useState(true);
  const getData = async () => {
    await apiInstance
      .get("/")
      .then(response => {
        setValue(response.data.response[0]);
        setFetchStatus(true);
      })
      .catch(error => setFetchStatus(false))
      .finally(error => false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider value={[value, setValue]}>
      <UserContextProvider>
        {fetchStatus ? <MainApp appData={value} /> : <ErrorService />}
      </UserContextProvider>
    </AppContext.Provider>
  );
}

export default App;
