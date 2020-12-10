import React, { useEffect, useState } from 'react';
import '../index.css';
import axios from 'axios';

const APIKEY = process.env.REACT_APP_APIKEY;

const CharacterCard = ({searchVal}) => {

    const characterURL = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=';

    const [characterData, setCharacterData] = useState([]);

    useEffect(() => {
        axios.get(characterURL + searchVal + APIKEY).then((response) => {
            console.log(response.data.data.results)
            setCharacterData(response.data.data.results);
        })
    },[searchVal])



    return (
        <div className="card-container">
        {characterData.map((character, index) => 
        <div className="characterCard" key={index}>
            <h2>{ character.name }</h2>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}` }/>
        </div>
        )}
        </div>
    )
}

export default CharacterCard;