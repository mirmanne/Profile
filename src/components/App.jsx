import React from "react";
import Table from "./Table.jsx";
import '../css/styles.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Table />
    </div>
  );
}

export default App;
