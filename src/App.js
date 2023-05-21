
import './App.css';
import {  Route,Routes } from 'react-router-dom';

import Home from './Components/Home';
import Principale from './Components/Principale';
// import NavBar from './Components/NavBar';
function App() {
 

  return (
    <>
    {/* <NavBar></NavBar> */}
    <Routes>
  <Route path="/" element={<Principale/>}></Route>
  
</Routes>
</>
  );
}

export default App;
