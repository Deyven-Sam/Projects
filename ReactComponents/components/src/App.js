import './App.css';
import MyProfilePhoto from "./Component/Profile/ProfilePhoto.js";
import MyFullName from "./Component/Profile/FullName.js";
import Address from "./Component/Profile/Adrs.js";


function App() {
  return (
    <div className="App">
<MyProfilePhoto/>
<MyFullName/>
<Address/>

    </div>
  );
}

export default App;
