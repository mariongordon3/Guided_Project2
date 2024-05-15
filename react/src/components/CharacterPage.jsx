import React, { useState, useEffect } from "react";
import {
    useParams,
} from "react-router-dom";


export default function CharacterPage(props) {
    let { characterId } = useParams();
    const [character, setCharacter] = useState({})
    const [planet, setPlanet] = useState([])
    const [film, setFilm] = useState([])
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

            } catch (error) {
                console.error('Error fetching character:', error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(character.homeworld)
                const response = await fetch(`${import.meta.env.VITE_SWAPI_API_URL}/planets/${character.homeworld}`);
                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }
                const json_response = await response.json();
                console.log(json_response)
                setPlanet(json_response); // assign JSON response to the data variable.

            } catch (error) {
                console.error('Error fetching planet:', error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_SWAPI_API_URL}/characters/${characterId}/films`);
                if (!response.ok) {
                    throw new Error('Data could not be fetched!');
                }
                const json_response = await response.json();
                // console.log(json_response)
                setFilm(json_response); // assign JSON response to the data variable.

            } catch (error) {
                console.error('Error fetching film:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h1>Character Page</h1>
            <h1 id="name">{character.name}</h1>
            <section id="generalInfo">
                <p>Height: <span id="height">{character.height}</span> cm</p>
                <p>Mass: <span id="mass">{character.mass}</span> kg</p>
                <p>Born: <span id="birth_year">{character.birth_year}</span></p>
            </section>
            <section id="planets">
                <h2>Homeworld</h2>
                <p><span id="homeworld">{planet}</span></p>
            </section>
            <section id="films">
                <h2>Films appeared in {film}</h2>
            </section>
        </>
    )
}