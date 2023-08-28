import React, { useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from 'mdb-react-ui-kit';
import './Table.css'
import { Select } from 'antd';

import { SwapOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';


function Table() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('');


  const data = [
    {
      image: "https://seeklogo.com/images/S/Saudi_Arabian_Airlines-logo-E05C118216-seeklogo.com.png",
      name: 'Saudi Airlines',
      from: "Calicut",
      fare: 22340,
      to: "Bengluru",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/566px-Emirates_logo.svg.png",
      name: 'Emirates',
      from: "Bengluru",
      fare: 11340,
      to: "Abudhabi",
    },
    {
      image: "https://logowik.com/content/uploads/images/541_qatarairways.jpg",
      name: 'Qatar Airways',
      from: "Sharjah",
      fare: 32340,
      to: "Jeddah",
    },
    {
      image: "https://w7.pngwing.com/pngs/544/56/png-transparent-gulf-air-office-airline-check-in-logo-umrah-miscellaneous-company-text-thumbnail.png",
      name: 'Gulf Air',
      from: "Abudhabi",
      fare: 18340,
      to: "Calicut",

    },
    {
      image:"https://logos-world.net/wp-content/uploads/2023/01/Oman-Air-Logo.png",
      name: 'Oman Air',
      from: "Kochi",
      fare: 52310,
      to: "Jeddah",
    },
    {
      image: "https://seeklogo.com/images/S/Saudi_Arabian_Airlines-logo-E05C118216-seeklogo.com.png",
      name: 'Saudi Airlines',
      from: "Jeddah",
      fare: 12340,
      to: "Calicut",
    },
    {
      image: "https://i.pinimg.com/236x/23/31/9f/23319f3614c3fb3a2636bcc206b68446--ain-dubai.jpg",
      name: 'Fly Dubai',
      from: "Abudhabi",
      fare: 23450,
      to: "Sharjah",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/566px-Emirates_logo.svg.png",
      name: 'Emirates',
      from: "Sharjah",
      fare: 25640,
      to: "Kochi",
    },
    {
      image: "https://w7.pngwing.com/pngs/544/56/png-transparent-gulf-air-office-airline-check-in-logo-umrah-miscellaneous-company-text-thumbnail.png",
      name: 'Gulf Air',
      from: "Kochi",
      fare: 17340,
      to: "Calicut",
    },
  ];
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedFrom === '' || item.from === selectedFrom) &&
    (selectedTo === '' || item.to === selectedTo)
  );

  return (
    <>
      <MDBContainer>
        <div className="filter">
          <div className="from">
            From <Select
              showSearch
              style={{
                width: 400,
              }}
              placeholder="Choose Depature Point"
              value={selectedFrom}
              onChange={(value) => setSelectedFrom(value)}
              optionFilterProp="children"
              filterOption={(input, option) => (option?.label ?? '').includes(input)}
              options={[
                {
                  value: "",
                  label: "All"
                },
                {
                  value: 'Calicut',
                  label: 'Calicut',
                },
                {
                  value: 'Sharjah',
                  label: 'Sharjah',
                },
                {
                  value: 'Jeddah',
                  label: 'Jiddah',
                },
                {
                  value: 'Abudhabi',
                  label: 'Abudhabi',
                },
                {
                  value: 'Mumbai',
                  label: 'Mumbai',
                },
                {
                  value: 'Bengluru',
                  label: 'Bengluru',
                },
              ]}
            />
          </div>

          <div className="icon">
            <SwapOutlined />
          </div>
          <div className="to">
            TO
            <Select

              showSearch
              style={{
                width: 400,

                fontSize: 20
              }}
              className="to-selection"
              placeholder="Choose Designation point"
              value={selectedTo}
              onChange={(value) => setSelectedTo(value)}
              optionFilterProp="children"
              filterOption={(input, option) => (option?.label ?? '').includes(input)}

              options={[
                {
                  value: "",
                  label: "All"
                },
                {
                  value: 'Calicut',
                  label: 'Calicut',
                },
                {
                  value: 'Sharjah',
                  label: 'Sharjah',
                },
                {
                  value: 'Jeddah',
                  label: 'Jiddah',
                },
                {
                  value: 'Abudhabi',
                  label: 'Abudhabi',
                },
                {
                  value: 'Mumbai',
                  label: 'Mumbai',
                },
                {
                  value: 'Bengluru',
                  label: 'Bengluru',
                },
              ]}
            />
          </div>
        </div>

        {
          filteredData.length === 0 ? (
            <p className='no-data'>No Airlines Available</p>
          ) : (<MDBTable align='middle' className='data-table'>
            <MDBTableHead>
              <tr>
                <th scope='col'>Airline Name</th>
                <th scope='col'>Fare</th>
                <th scope='col'>From </th>
                <th scope='col'>To</th>
                <th scope='col'>Actions</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td className="airline-name">
                    <div className='d-flex align-items-center '>
                      <img
                        src={item.image}
                        alt=''
                      />
                      <div className='ms-5'>
                        <p className='fw-bold mb-1'>{item.name}</p>

                      </div>
                    </div>
                  </td>

                  <td>
                    {item.fare}
                  </td>
                  <td>{item.from}</td>
                  <td>{item.to}</td>
                  <td>
                    <Link to= '/booking' state={{ flightDetials: item }}>
                      <button>Book Now</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>

          )
        }

      </MDBContainer>
    </>
  );
}
export default Table