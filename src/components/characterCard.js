import React, { useEffect, useState } from 'react';
import '../index.css';
import axios from 'axios';

const CharacterCard = ({searchVal}) => {

    const characterURL = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=';

    const credentials = '&ts=1&apikey=6871af630ca51742153d2db8dbf10dcb&hash=609bb5211dbf0e54c53e927bb92f5ee7';

    const [characterData, setCharacterData] = useState([]);

    useEffect(() => {
        axios.get(characterURL + searchVal + credentials).then((response) => {
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