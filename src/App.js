import logo from './logo.svg';
import './App.css';
import react,{useEffect,useState} from 'react' 
import axios from 'axios';
import Addnew from './addnew';
import Getdata from './getdata';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  

  

  return (
    <div className="App">
    <Router>
      
      <Routes>
      <Route exact path='/' element={<Getdata/>}/>
      <Route exact path='/addnew' element={<Addnew/>}/>
      </Routes>
      
      </Router>
      {/* <Addnew/> */}
    </div>
  );
}

export default App;
