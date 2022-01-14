
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Loader from "./Loader";
import api from "../api"
import '../index.css';


    const [term, setTerm] = useState("");
    const [gifsHolder, setGifsHolder] = useState("");
    

//const API = api();
const API_KEY = api();
const userInput = "cats";
export default function Search (){
const [cards, setCards] = useState([]);
const [isLoading, setIsloading] = useState(false);

const fetchData = (props) => {
	setIsloading(true);
    fetch(`http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${API_KEY}&limit=40`)
      .then(response => {
        return response.json() 
      })
      .then(data => {
        setCards(data.data)
        console.log(data)
        setIsloading(false)
      })
  }
 useEffect(() => {
 	fetchData()
    }, []);
 const renderGifs = () =>{
 	if(isLoading) {
 		return <Loader/>
 	}
 	return cards.map(el=>{
 		return (
        <div key ={el.id} className="GIFS">
         	<img 	
         		src = {el.images.fixed_height.url}
         		/>
        </div>
        )
 	})
 }
 return <div className="container-gifs"> {renderGifs()}</div>
}
