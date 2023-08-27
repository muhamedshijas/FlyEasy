import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import './App.css'
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <MDBContainer fluid>
    <Routes>
    <Route path='/' element={<Home/>}/>

 
    </Routes>
    </MDBContainer>
  );
}

export default App;
