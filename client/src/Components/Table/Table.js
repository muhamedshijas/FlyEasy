import React, { useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

 function Table() {
  const [searchQuery, setSearchQuery] = useState('');

  // Your static data
  const data = [
    {
      image:"",
      name: 'John Doe',
      // ... other properties
    },
    {
      name: 'Alex Ray',
      // ... other properties
    },
    {
      name: 'Kate Hunington',
      // ... other properties
    },
  ];

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the data based on the search query
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Title</th>
            <th scope='col'>Status</th>
            <th scope='col'>Position</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{item.name}</p>
                    <p className='text-muted mb-0'>john.doe@gmail.com</p>
                  </div>
                </div>
              </td>
              {/* ... Render other columns here */}
              <td>
                <MDBBtn color='link' rounded size='sm'>
                  Edit
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
export default Table