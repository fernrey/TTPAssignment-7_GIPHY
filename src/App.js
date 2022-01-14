import { useEffect, useState } from "react";
import Search from './Components/Search.js'
export default function App() {
   const [gifsHolder, setGifs] = useState({"arr": []});
   

// console.log("the key" + process.env.REACT_APP_GIPHY_KEY)

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
  
 console.log(gifsHolder[0] )

  return (
      <div>
    <nav> 
    {/* { (gifsHolder.data[0])? console.log(gifsHolder) : ""} */}
   
        <div className ="logo"> <h2>GIF Search Generator</h2></div>
        <ul className="bar">
        <li>GIFS</li>
        </ul>
    </nav> 
   
     {/* <div className="searchBar">
      <form>
            <input  
                   type="text" 
                    name="GIF"
                    placeholder="Enter GIF"
                    className="input"/>
      <button className="submit">Search</button>
      <button className="submit">Trending</button>
      <button className="submit">Randome GIF</button>
          </form>
    </div> */}
    <Search getData={getData} />
     </div> 
  );
}


