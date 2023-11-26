import { useState } from 'react'
import './App.css'
import SignupForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";


export default function App(){

const [token, setToken] = useState(null);

  return(<>

  <Authenticate  token={token} setToken={setToken}/>
  <SignupForm token={token} setToken={setToken}/>
  {console.log(token)}
  </>
  );
  
}