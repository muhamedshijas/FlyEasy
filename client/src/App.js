import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import './App.css'
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Booking from './Components/Booking/Booking ';
import BookingSuccesfull from './Components/BookingSuccessFull/BookingSuccesfull';
import Stepper from './Components/Stepper/Stepper';
import Table from './Components/Table/Table';

function App() {
  return (
    <MDBContainer fluid>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/chooseflight' element={<Table/>}/>
    <Route path='/booking' element ={<Stepper/>}/>
    <Route path='/bookingcompleted' element ={<BookingSuccesfull/>}/>
    <Route path='/stepper' element ={<Stepper/>}/>
    </Routes>
    </MDBContainer>
  );
}

export default App;
