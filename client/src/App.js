import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import './App.css'
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Booking from './Components/Booking/Booking ';
import BookingSuccesfull from './Components/BookingSuccessFull/BookingSuccesfull';

function App() {
  return (
    <MDBContainer fluid>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/booking' element ={<Booking/>}/>
    <Route path='/bookingcompleted' element ={<BookingSuccesfull/>}/>
 
    </Routes>
    </MDBContainer>
  );
}

export default App;
