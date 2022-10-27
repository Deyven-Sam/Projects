import React from "react";
import movieList from "./MovieList";
import CreateMV from "./loopList";
var i=0;






const Fltr=({H})=>{

const [input, setValue] = React.useState("")
const Change = (event) => {setValue(event.target.value.toUpperCase())}

function isTrue(x){
var w=input.split(" ")
for (i=0;i<w.length;i++){ if (x.title.toUpperCase().includes(w[i]) || x.rate.includes(Math.floor(w[i]))){return true}}
}

const FilterMovieList=()=> {var z=movieList.filter(isTrue); H(z)}



return(
<div className="toCenter">
  <div className="col2">
    <div className="inpCss">
    <button className="watch-btn" onClick={FilterMovieList}>
    <h3><i className="material-icons">&#xE037;</i>CLICK TO FILTER</h3>
    </button>
    <input type="search"  value={input} onChange={Change}  />
  </div>
  </div>

</div>
)
}


export default Fltr;
