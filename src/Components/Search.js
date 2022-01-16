import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Loader from "./Loader";
import api from "../api"
import '../index.css';

export default function Search ({getData}){
const [term, setTerm] = useState("");
const [gifsHolder, setGifsHolder] = useState("");
//const API = api();
const API_KEY = api();
const userInput = "dogs";
const [cards, setCards] = useState([]);
const [isLoading, setIsloading] = useState(false);

const fetchData = (term) => {
	setIsloading(true);
	const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${API_KEY}&limit=40`;
    fetch(url)
      .then(response => {
        return response.json() 
      })
      .then(data => {
        setCards(data.data)
        console.log(data)
        setIsloading(false)
        setGifsHolder(data)
        getData(url, data)
        
      })
  }
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData(term);
        console.log("handleSubmit")
}
const handChange = (e) => {
  	console.log(e.target.value)
  	setTerm(e.target.value);
  }
  const setSearchType = (e) => {
  	console.log(e.target.value)
  	setTerm(e.target.value);
  }

 // useEffect(() => {
 // 	fetchData()
 //    }, []);
return (
	<div>
   <div className="searchBar" >
    <form onSubmit={handleSubmit}>
        <input  
            type="text" 
            name="GIF"
            placeholder="Enter GIF"
            className="input"
            onChange={handChange}/>
        <button className="submit">Search</button>
        <button className="submit">Trending</button>
        <button className="submit" onClick={() => setSearchType("search")}>Randome GIF</button>
    </form>
    </div>
    </div>
    )
	
}




