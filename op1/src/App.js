import React,{useState} from 'react';
import Loginformop1 from './loginformop1';
function App() {
  const User = {
    email: "bhavika.21910328@viit.ac.in",
    password: "Bha123"
  }

  const [user,setUser] = useState({name:"",email:""});
  const [error,setError] = useState("");

  return (
    <div className="App">
      {(user.email !== "")?(
        <div className='welcome'></div>

      ):(
        <Loginformop1/>
      )}
    </div>
  );
}

export default App;
