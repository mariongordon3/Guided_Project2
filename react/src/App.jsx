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
  const [characters, setCharacters] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_SWAPI_API_URL}/characters`);
                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }
                const json_response = await response.json();
                console.log(json_response)
                setCharacters(json_response); // assign JSON response to the data variable.

            } catch (error) {
                console.error('Error fetching socks:', error);
            }
        };
        fetchData();
    }, []);

  return (
    <>
      <Router>
        <div>
        <Routes>
          <Route exact path="/" element={<Characters characters={characters}  />}/>
          
        </Routes>
      </div>
      </Router>
      

    </>
  )
}

export default App
