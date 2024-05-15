import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";

const Characters = (props) => {
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
            <h1>Star Wars Universe Lookup</h1>
            <label htmlFor="searchString">Who you looking for? <span className="small">(Regular expressions are cool
            here)</span></label>
            <section className="characterList">
                {
                    characters.map((char) => (
                        <div key={char.id}>
                        <Link to={'/characters/'+char.id}>
                        {char.name}
                            </Link>   
                        </div>
                    ))
                }
            </section>
        </>
        
    );
};
{/* <Link className="nav-link" to="/">
                  Home
              </Link> */}
export default Characters