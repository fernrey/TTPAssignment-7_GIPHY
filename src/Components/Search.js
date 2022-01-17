import React, { useState } from "react";
import api from "../api"
import '../index.css';
export default function Search ({getData}){
    
    const [term, setTerm] = useState("");
    const [isRandom, setIsRandom] = useState(false)
    const [searchType, setSearchType] = useState("")
    const API_KEY = api();
    //const [gifsHolder, setGifsHolder] = useState("");
    //const API = api();
    //const userInput = "dogs";
    //const [cards, setCards] = useState([]);
    //const [isLoading, setIsloading] = useState(false);

    
    const fetchData = (term) => {
	//setIsloading(true);
	const url = `http://api.giphy.com/v1/gifs/${searchType}?q=${term}&api_key=${API_KEY}&limit=40`;
    console.log("URL: " + url)
    fetch(url)
      .then(response => {
        return response.json() 
      })
      .then(data => {
          //console.log(searchType)
          if (searchType === 'random') {
              //setIsRandom(true)
              console.log("Test: " + data.data.images.fixed_height.url)
              //setCards(data.data.images.fixed_height.url)
              //setGifsHolder(data.data.images.fixed_height.url)
              console.log(isRandom)
              console.log("URL: " + url)
              if (isRandom === false) {
                getData(!isRandom, data.data.images.fixed_height.url)
              }else {
                getData(isRandom, data.data.images.fixed_height.url)
              }
              
              
          }else {
           // setCards(data.data)
            console.log(data)
            //setIsloading(false)
           // setGifsHolder(data)
           console.log("URL: " +url)
           if (isRandom === false) {
            getData(isRandom, data)
           }else {
            getData(!isRandom, data)
           }
           
        
          }
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData(term);
        console.log("handleSubmit")
}
    const handChange = (e) => {
        //console.log(e.target.value)
  	    setTerm(e.target.value);
    }

    return (
	    <div>
            <div className="searchBar" >
                <form onSubmit={handleSubmit}>
                    <input  
                        type="text" 
                        name="GIF"
                        placeholder="Enter GIF"
                        className="input"
                        onChange={handChange}
                    />
                    <button className="submit" onClick = {() => setSearchType("search")}>Search</button>
                    <button className="submit" onClick = {() => setSearchType("trending")}>Trending</button>
                    <button className="submit" onClick = {() => setSearchType("random")}>Randome GIF</button>
                </form>
            </div>
        </div>
        )
    }




