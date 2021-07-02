import React from "react";
import "./App.css";

import Watches from "./task1/Watches.jsx";
import Crud from "./task2/Crud.jsx";

function App() {
  return (
    <React.Fragment>
      <div className="task-1">
        <Watches />
      </div>
      <div className="task-2">
      <Crud />
      </div>
    </React.Fragment>
  );
}

export default App;
