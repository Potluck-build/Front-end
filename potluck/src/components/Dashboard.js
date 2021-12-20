import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Dashboard = () => {
  const [addEvent, setAddEvent] = useState({
    name: "",
    date: "",
    location: "",
  });

  const handleChange = (e) => {
    setAddEvent({
      ...addEvent,
      [e.target.name]: e.target.value,
    });
    console.log(addEvent);
  };

  return (
    <div className='potlucks-con'>
      <div className='potluck'>
        <label className='label'>
          <input
            onChange={handleChange}
            className='name'
            placeholder='Name'
            name='name'
            value={addEvent.name}
          />
        </label>
        <br />
        <label>
          <input
            onChange={handleChange}
            placeholder='mm/dd/yy'
            className='date'
            type='text'
            name='date'
            value={addEvent.date}
          />
        </label>
        <label>
          <input
            onChange={handleChange}
            className='location'
            placeholder='Location'
            type='text'
            name='location'
            value={addEvent.location}
          />
        </label>
      </div>
    </div>
  );
};

export default Dashboard;
