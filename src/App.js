import './index.css';
import { useState } from "react";
import Search from './Components/Search.js'
import Cards from './Components/Cards.js'

export default function App() {

    const [gifsHolder, setGifs] = useState([]);
    const [random, setRandom] = useState("")

    // getData() returns from Search.js
    let  getData = (isRandom, arryHoldResultSearch) =>{
        setGifs([])
        console.log(isRandom)
        setRandom(isRandom)
        if (isRandom === true) {
            //console.log(arryHoldResultSearch)
            setGifs(arryHoldResultSearch)
        } else {
            console.log(arryHoldResultSearch['data'])
            setGifs(arryHoldResultSearch['data'])
        }
    }
    //console.log(random)
    //console.log(gifsHolder)

    const display = () => {
        if(!random) {
            return gifsHolder.map((el) => (
                <Cards key={el.id} src = {el.images.fixed_height.url} />
              ))
        } else {
            return <Cards src = {gifsHolder} />
        }
    }
    
    return (
      <div>
          <nav> 
              <div className ="logo">
                   <h2>GIF Search Generator</h2>
              </div>
              <ul className="bar"></ul>
            </nav> 
            
            <Search getData={getData} />
            
            {display()}
        </div> 
  );
}


