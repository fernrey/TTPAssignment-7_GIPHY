import React from 'react';
import { useState } from "react";

export default function Search() {

    const [term, setTerm] = useState("");
    const [gifsHolder, setGifs] = useState("");

    const fetchGifs = (term)=> {
        if (term.length==5){
        let url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=`
        fetch(url).
        then(response => response.json()).then((gifs) => {
            console.log(gifs);
            
            setGifs(gifs)
    
        }).catch((error) => {
    
            console.log(error.message)
        })}
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setTerm(event.target.GIF.value)
        console.log(term);
        fetchGifs(term)
        console.log(gifsHolder)

    }
    return (
   <div className="searchBar" >
    <form onSubmit={handleSubmit}>
        <input  
            type="text" 
            name="GIF"
            placeholder="Enter GIF"
            className="input"/>
        <button className="submit">Search</button>
        <button className="submit">Trending</button>
        <button className="submit">Randome GIF</button>
    </form>
    </div>
    )

}