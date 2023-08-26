import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Table from './Components/Table/Table';

function App() {
  return (
    <MDBContainer fluid>
      <Navbar/>
      <Banner/>
      <Table/>
    </MDBContainer>
  );
}

export default App;
