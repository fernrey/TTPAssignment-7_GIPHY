import './index.css';
import Search from './Components/Search'

export default function App() {
  return (
      <div>

    <nav>
        <div className ="logo"> <h2>GIF Search Generator</h2></div>
        <ul className="bar">
        </ul>
    </nav>
     <div className="searchBar">
      <form>
      <h1>Enter A Word </h1>
      <input className="input" type="text" id="searchButtonText" ></input>
      <button className="submit" id="searchButton" >Search</button>
      <button className="submit" id="TrendingButton">Trending</button>
      <button className="submit" id="randomButton">Random GIF</button>
          </form>
    </div>
      <Search/>
     </div> 
  );
}


