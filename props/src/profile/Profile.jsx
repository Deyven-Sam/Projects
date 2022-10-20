import React from "react";
import PropTypes from "prop-types";
import './Profile.css';






const Imag="./logo192.png"
const HandleName=({fullName,bio,profession})=>{

return (
<div className="car">
<div style={{color:"red", textAlign:"center"}} >
<img src={Imag} alt="yeah" />
<h1>Good morning Mr {fullName}</h1>
<p>You're a {bio} guy who works in a {profession} LAB</p>
</div>
</div>
)
}





HandleName.defaultProps={
  fullName:"Sami Guesmi",
  bio:"Mysterious",
  profession:"Insurance"
}

HandleName.propTypes={
  fullName:PropTypes.string,
  bio:PropTypes.string,

}



export default HandleName;
