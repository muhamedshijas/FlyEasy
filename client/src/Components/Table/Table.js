import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from 'mdb-react-ui-kit';
import './Table.css'
import { Select } from 'antd';
import moment from 'moment'
import { SwapOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { DatePicker } from 'antd';
import 'moment/locale/en-gb';
function Table() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString);
  };

  const data = [
    {
      image: "https://seeklogo.com/images/S/Saudi_Arabian_Airlines-logo-E05C118216-seeklogo.com.png",
      name: 'Saudi Airlines',
      from: "Calicut",
      fare: 22340,
      to: "Bengluru",
      date: "2022-08-30",
      time: "20:30",
      duration: "4 Hrs",
      model:"A0001"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/566px-Emirates_logo.svg.png",
      name: 'Emirates',
      from: "Bengluru",
      fare: 11340,
      to: "Abudhabi",
      date: "2022-08-30",
      time: "20:30",
      duration: "4 Hrs",
      model:"A0001"
    },
    {
      image: "https://logowik.com/content/uploads/images/541_qatarairways.jpg",
      name: 'Qatar Airways',
      from: "Sharjah",
      fare: 32340,
      to: "Jeddah",
      date: "2022-08-30",
      time: "20:30",
      duration: "4 Hrs",
      model:"A0001"
    },
    {
      image: "https://w7.pngwing.com/pngs/544/56/png-transparent-gulf-air-office-airline-check-in-logo-umrah-miscellaneous-company-text-thumbnail.png",
      name: 'Gulf Air',
      from: "Abudhabi",
      fare: 18340,
      to: "Calicut",
      date: "2023-08-31",
      time: "20:30",
      duration: "4 Hrs",
      model:"A0001"

    },
    {
      image: "https://logos-world.net/wp-content/uploads/2023/01/Oman-Air-Logo.png",
      name: 'Oman Air',
      from: "Kochi",
      fare: 52310,
      to: "Jeddah",
      date: "2023-08-31",
      time: "20:30",
      duration: "4 Hrs",
      model:"A0001"
    },
    {
      image: "https://seeklogo.com/images/S/Saudi_Arabian_Airlines-logo-E05C118216-seeklogo.com.png",
      name: 'Saudi Airlines',
      from: "Jeddah",
      fare: 12340,
      to: "Calicut",
      date: "2023-08-30",
      time: "20:30",
      duration: "4 Hrs",
      model:"A0001"

    },
    {
      image: "https://i.pinimg.com/236x/23/31/9f/23319f3614c3fb3a2636bcc206b68446--ain-dubai.jpg",
      name: 'Fly Dubai',
      from: "Abudhabi",
      fare: 23450,
      to: "Sharjah",
      date: "2023-09-02",
      time: "20:30",
      duration: "4 Hrs",
      model:"A0001"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/566px-Emirates_logo.svg.png",
      name: 'Emirates',
      from: "Sharjah",
      fare: 25640,
      to: "Kochi",
      date: "2023-08-31",
      time: "20:30",
      duration: "4 Hrs",
      model:"A0001"
    },
    {
      image: "https://w7.pngwing.com/pngs/544/56/png-transparent-gulf-air-office-airline-check-in-logo-umrah-miscellaneous-company-text-thumbnail.png",
      name: 'Gulf Air',
      from: "Kochi",
      fare: 17340,
      to: "Calicut",
      date: "2023-08-30",
      time: "20:30",
      duration: "4 Hrs",
      model:"A0001"

    },
  ];
  const isSameDate = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return (
      d1.getFullYear() === parseInt(d2.getFullYear()) &&
      d1.getMonth() === parseInt(d2.getMonth()) &&
      d1.getDate() === parseInt(d2.getDate())
    )
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedFrom === '' || item.from === selectedFrom) &&
    (selectedTo === '' || item.to === selectedTo) &&
    (!selectedDate || isSameDate(item.date, selectedDate))
  );

  return (<>
    <div className="body-detials">
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
        <div className="date">
            Choose Date 
          <DatePicker onChange={handleDateChange} />
        </div>
      </div>

      {
        filteredData.length === 0 ? (<p className='no-data'>No Airlines Available</p>
        ) : (<div className="flight-detials">
          
        {
          filteredData.map((item,index)=>{ return <div className="detials-card">
            <div className="flight">
              <div className="flight-logo">
                <img src={item.image} alt="" srcset="" />
              </div>
              <div className="flight-name">
                <b>{item.name}</b>
                <p>{item.model}</p> 
              </div>
            </div>
            <div className="airport-detials">
              <div className="from">
                <p>From</p>
                <h5>{item.from}</h5>
              </div>
              <SwapOutlined />
              <div className="from">
                <p>To</p>
                <h5>{item.to}</h5>
              </div>
            </div>

            <div className="time-detials">
              <div className="departure">
                <p>Departure</p>
                <b>{item.time}</b>
              </div>
              <div className="departure">
                <p>Duration</p>
                <b>{item.duration}</b>
              </div>
            </div>

            <div className="price-detials">
              <p>Price</p>
              <h2> &#8377; {item.fare}</h2>
            </div>

            <div className="book-btn">
            <Link to= '/booking'  state={{ flightDetials:item }}>
            <button>Book Now</button>
          </Link>
            </div>
          </div>
        })
      }
        </div>

        )
      }
    </div>

  </>
  );
}
export default Table