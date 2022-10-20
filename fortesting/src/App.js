import React from "react";
import './App.css';
import ToShow from "./profile";





function App() {

  const [show, setShow]=React.useState(null);

      function Apply(){
      setShow(<ToShow fullName="Sami" bio="Sea-Food" profession="Job"
      imgSrc="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />)}

      function Deapply(){
      setShow(null);
      }


  return (
<div className="App">

<div className="container">{show}</div>
<button onClick={show===null?Apply:Deapply}>Show The Magic</button>

</div>
  );
}

export default App;
