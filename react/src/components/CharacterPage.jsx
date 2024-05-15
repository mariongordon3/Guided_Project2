import React, { useState, useEffect } from "react";
import {
    useParams,
} from "react-router-dom";


export default function CharacterPage(props) {
    let { characterId } = useParams();
    const [character, setCharacter] = useState({})
    const [planet, setPlanet] = useState({})
    const [films, setFilms] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_SWAPI_API_URL}/characters/${characterId}`);
                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }
                const json_response = await response.json();
                console.log(json_response)
                setCharacter(json_response); // assign JSON response to the data variable.

                console.log(character.homeworld)
                const planet_response = await fetch('${import.meta.env.VITE_SWAPI_API_URL}/planets/' + character.homeworld);
                const planet_json = await planet_response.json();
                console.log(planet_json);
                setPlanet(planet_json)

            } catch (error) {
                console.error('Error fetching character:', error);
            }
        };
        fetchData();
    }, []);


    return (
        <>
            <h1 id="name">{character.name}</h1>
            <section id="generalInfo">
                <p>Height: <span id="height">{character.height}</span> cm</p>
                <p>Mass: <span id="mass">{character.mass}</span> kg</p>
                <p>Born: <span id="birth_year">{character.birth_year}</span></p>
            </section>
            <section id="planets">
                <h2>Homeworld</h2>
                <p><span id="homeworld">{JSON.stringify(planet)}</span></p>
            </section>
            <section id="films">
                <h2>Films appeared in</h2>
                {/* {
                    (films).map((film) => {
                        <li key={film.film_id}>{film.film_id}</li>
                    })
                } */}
            </section>
        </>
    )
}