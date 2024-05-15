import React, { useState, useEffect } from "react";
import {
    useParams,
} from "react-router-dom";
 

export default function CharacterPage(props){
    let { characterId } = useParams();
    return(
        <>  
        <h1>Character Page</h1>
        <h2>{characterId}</h2>
        </>
    )
}