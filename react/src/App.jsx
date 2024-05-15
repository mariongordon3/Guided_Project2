import React, { useState, useEffect } from "react";
import './App.css'
import Characters from "./components/Characters";
import CharacterPage from './components/CharacterPage'
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
        <Routes>
          <Route exact path="/" element={<Characters/>}/>
          <Route path="/characters/:characterId" element={<CharacterPage/>} />
        </Routes>
      </div>
      </Router>
      

    </>
  )
}

export default App
