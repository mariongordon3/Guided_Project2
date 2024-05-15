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
      <div>
      <h1>Star Wars Universe Lookup</h1>
      <label htmlFor="searchString">Who you looking for? <span className="small">(Regular expressions are cool
          here)</span></label>
      <Characters />
      </div>

    </>
  )
}

export default App
