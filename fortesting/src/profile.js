import React from "react";

const ToShow=(props)=>{
return (
  <div><div className="imgcontainer">
  <img src={props.imgSrc}  alt="MyPic" />
  </div>
    <h1>My Name is : {props.fullName}</h1>
    <p>I'm a fun of {props.bio}</p>
    <p>I work as {props.profession}</p></div>
  )

}


export default ToShow;
