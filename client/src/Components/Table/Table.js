import React, { useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from 'mdb-react-ui-kit';
import './Table.css'
import { Select } from 'antd';

function Table() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('');


  const data = [
    {
      image: "https://www.pngitem.com/pimgs/m/20-205338_saudia-airlines-logo-vector-logo-saudi-arabian-airlines.png",
      name: 'John Doe',
      from: "Calicut",
      to: "Bengluru",
    },
    {
      image: "https://www.pngitem.com/pimgs/m/20-205338_saudia-airlines-logo-vector-logo-saudi-arabian-airlines.png",
      name: 'Alex Ray',
      from: "Bengluru",
      to: "Abudhabi",
    },
    {
      image: "https://www.pngitem.com/pimgs/m/20-205338_saudia-airlines-logo-vector-logo-saudi-arabian-airlines.png",
      name: 'Kate Hunington',
      from: "Sharjah",
      to: "Jeddah",
    },
    {
      image: "https://www.pngitem.com/pimgs/m/20-205338_saudia-airlines-logo-vector-logo-saudi-arabian-airlines.png",
      name: 'John Doe',
      from: "Abudhabi",
      to: "Calicut",

    },
    {
      image: "https://www.pngitem.com/pimgs/m/20-205338_saudia-airlines-logo-vector-logo-saudi-arabian-airlines.png",
      name: 'Alex Ray',
      from: "Kochi",
      to: "Jeddah",
    },
    {
      image: "https://www.pngitem.com/pialicutmgs/m/20-205338_saudia-airlines-logo-vector-logo-saudi-arabian-airlines.png",
      name: 'Kate Hunington',
      from: "Jeddah",
      to: "Calicut",
    },
    {
      image: "https://www.pngitem.com/pimgs/m/20-205338_saudia-airlines-logo-vector-logo-saudi-arabian-airlines.png",
      name: 'John Doe',
      from: "Abudhabi",
      to: "Sharjah",
    },
    {
      image: "https://www.pngitem.com/pimgs/m/20-205338_saudia-airlines-logo-vector-logo-saudi-arabian-airlines.png",
      name: 'Alex Ray',
      from: "Sharjah",
      to: "Kochi",// ... other properties
    },
    {
      image: "https://www.pngitem.com/pimgs/m/20-205338_saudia-airlines-logo-vector-logo-saudi-arabian-airlines.png",
      name: 'Kate Hunington',
      from: "Kochi",
      to: "Calicut",
    },
  ];
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedFrom === '' || item.from === selectedFrom) &&
    (selectedTo === '' || item.to === selectedTo)
  );

  return (
    <div>
      <MDBContainer>
        <div className="filter">
          <div className="from">
            From <Select
              showSearch
              style={{
                width: 200,
              }}
              placeholder="Search to Select"
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
          <div className="to">
            TO
            <Select
              showSearch
              style={{
                width: 200,
              }}
              placeholder="Search to Select"
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
            <p>No Airlines Available</p>
          ) : (<MDBTable align='middle'>
            <MDBTableHead>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Date</th>
                <th scope='col'>From </th>
                <th scope='col'>To</th>
                <th scope='col'>Actions</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src={item.image}
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>{item.name}</p>

                      </div>
                    </div>
                  </td>

                  <td>
                    12/10/2022
                  </td>
                  <td>{item.from}</td>
                  <td>{item.to}</td>
                  <td><button>Book Now</button></td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>

          )
        }

      </MDBContainer>
    </div>
  );
}
export default Table