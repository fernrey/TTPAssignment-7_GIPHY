import React from 'react';
import { useState } from "react";

export default function Search({getData}) {

    const [term, setTerm] = useState("");
    const [gifsHolder, setGifsHolder] = useState("");
    


     const  fetchGifs =   (term)=> {

        if (term.length === 5){
        let url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${process.env.REACT_APP_GIPHY_KEY}`
        fetch(url).
        then(response =>    response.json()).then((gifs) => {
           
            setGifsHolder(gifs)
           
            // console.log(gifs)
            getData(url, gifs)
           return gifs
    }).catch((error) => {
    
            console.log(error.message)
        })}
        
    }


    const handleSubmit =  async(event) => {
        event.preventDefault();
        setTerm(event.target.GIF.value)
       
        console.log(fetchGifs(term) + "Hello")
         
      
       
        
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