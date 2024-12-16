import React from "react";
import "./app.css";
import { Link, Navigate } from "react-router-dom";

const App = () => {

  return (
    <div to="/carta" className="container-all">
      <Link to='/carta' className="container-envelope ">
        <div className="envelope">
          <div className="aba"></div>
          <div className="apoio-envelope"></div>
        </div>
        <div className="selo"></div>
        <div className="text-name">
          <h3>De: Gabriel</h3>
          <h3>Para: Karine ♡</h3>
        </div>
      </Link>
    </div>
  );
};

export default App;
