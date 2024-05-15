import React, { useState, useEffect } from "react";

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
        <section className="characterList">
            {
                characters.map((char) => (
                    <div key={char.id}>{(char.name)}</div>
                ))
            }
        </section>
    );
};

export default Characters