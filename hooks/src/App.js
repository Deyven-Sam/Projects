import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateMV from "./Components/loopList";
import movieList from "./Components/MovieList";
import Fltr from "./Components/filter";




function App() {
const [lastUpdatedList, setMovieList]=React.useState(movieList)
const HandleList=(z)=>{setMovieList(z)}

  return (
<>

    <div className="App">
{lastUpdatedList.map(CreateMV)}
    </div>

  <Fltr H={HandleList} />

</>
  );
}

export default App;
