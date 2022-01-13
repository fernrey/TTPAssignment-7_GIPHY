
import Search from './Components/Search.js'
export default function App() {

  return (
      <div>
    <nav>
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
    <Search />
     </div> 
  );
}


