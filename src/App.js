import './index.css';
import { useEffect, useState } from "react";
import Search from './Components/Search.js'
import Cards from './Components/Cards.js'
import api from "./api"

export default function App() {
const [gifsHolder, setGifs] = useState([]);
const API_KEY = api();

const fetchApi= () => {
 let url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
        fetch(url)
        .then(response => response.json()).then((gifs) => {
            // console.log(gifs);
            
            setGifs(gifs['data'])
            
            console.log(`only array so we can map`)
            
            console.log(gifs['data'])
            
    
        }).catch((error) => {
    
            console.log(error.message)
        })
       
  }

   let  getData = (term, arryHoldResultSearch) =>{
   console.log("From app here is the term" + term )
   console.log(arryHoldResultSearch['data'])
   setGifs(arryHoldResultSearch['data'])

	}

useEffect(() => {
  fetchApi()
 
}, [])
  console.log(gifsHolder)
  return (
      <div>

    <nav> 
   
        <div className ="logo"> <h2>GIF Search Generator</h2></div>
        <ul className="bar">
        </ul>
    </nav> 
   
      {/*<div className="searchBar">
      <form>
      <h1>Enter A Word </h1>
      <input className="input" type="text" id="searchButtonText" ></input>
      <button className="submit" id="searchButton" >Search</button>
      <button className="submit" id="TrendingButton">Trending</button>
      <button className="submit" id="randomButton">Random GIF</button>
      </form>
    </div>*/}
     <Search getData={getData} />

      {gifsHolder.map((el) => (
          <Cards key={el.id} src = {el.images.fixed_height.url} />
        ))}
    </div> 
  );
}


