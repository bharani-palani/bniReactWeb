import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import "./css/carousel.css";
import Menu from "./components/menu/menu";
import Wrapper from "./components/wrapper/wrapper";
import "./style.css";

function App() {
  return (
    <div>
      <Menu />
      <Wrapper />
    </div>

  );
}

export default App;
