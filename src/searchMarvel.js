import React, { useEffect, useState } from "react";
import CharacterCard from './components/characterCard';

export default function SearchMarvel() {

    const searchMarvelContent = async (e) => {
        e.preventDefault();
        console.log("submitting");
        setSearch(true);
        setSearchVal(document.getElementById('searchInput').value);
    }

    const [search, setSearch] = useState(false);
    const [searchVal, setSearchVal] = useState('');


    return (  


        <div>
        <form className="form" onSubmit={searchMarvelContent} >
            <label className="label" htmlFor="query">Comic Name</label>
            <input className="input" type="text" name="query" placeholder="i.e. Spider-Man" id="searchInput"></input>
            <button className="button" type="submit">Characters</button> 
        </form>

        {search ? 
        < CharacterCard searchVal={searchVal} /> 
        : 
        <div></div>}
        </div>
    )
}