import React, { useState, useEffect } from "react";
import './App.css'
import Characters from "./components/Characters";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div>
      <h1>Star Wars Universe Lookup</h1>
      <label htmlFor="searchString">Who you looking for? <span className="small">(Regular expressions are cool
          here)</span></label>
      <Characters />
      </div>
      </Router>
      

    </>
  )
}

export default App
