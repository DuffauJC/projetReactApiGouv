import React from 'react';
import './App.css';
import Site from "./containers/Site/Site";
import {HashRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <HashRouter>
        <Site/>
      </HashRouter>
  );
}

export default App;
