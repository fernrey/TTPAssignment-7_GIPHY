import './index.css';
import { useEffect, useState } from "react";
import Search from './Components/Search.js'
export default function App() {
   const [gifsHolder, setGifs] = useState({"arr": []});
   

console.log("the key" + process.env.REACT_APP_GIPHY_KEY)

   const fetchApi= () => {
 let url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_KEY}`
        fetch(url)
        .then(response => response.json()).then((gifs) => {
            // console.log(gifs);
            
            setGifs( gifs['data'])
            
            console.log(`only array so we can map`)
            
            console.log( gifs['data'] )
            
    
        }).catch((error) => {
    
            console.log(error.message)
        })
       
  }

   let  getData = (term, arryHoldResultSearch) =>{
   console.log("From app here is the term" + term )
   console.log("From app here is the array with values" + arryHoldResultSearch['data'])


	}

useEffect(() => {
  fetchApi()
 
}, [])
  

  return (
      <div>

    <nav> 
    {/* { (gifsHolder.data[0])? console.log(gifsHolder) : ""} */}
   
        <div className ="logo"> <h2>GIF Search Generator</h2></div>
        <ul className="bar">
        </ul>
    </nav> 
   
     {/* <div className="searchBar">
      <form>
      <h1>Enter A Word </h1>
      <input className="input" type="text" id="searchButtonText" ></input>
      <button className="submit" id="searchButton" >Search</button>
      <button className="submit" id="TrendingButton">Trending</button>
      <button className="submit" id="randomButton">Random GIF</button>
       </form>
    </div>
    </div> */}
    <Search getData={getData} />
     </div> 
  );
}


