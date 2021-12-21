import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Dashboard = () => {
  const [addEvent, setAddEvent] = useState({
    user_id: 2,
    event_name: "",
    event_date: "2000-01-01T00:00:00",
    event_location: "",
  });

  const handleChange = (e) => {
    setAddEvent({
      ...addEvent,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/events/", addEvent)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
            name='event_name'
            value={addEvent.event_name}
          />
        </label>
        <br />
        <label>
          <input
            onChange={handleChange}
            placeholder='mm/dd/yy'
            className='date'
            type='datetime-local'
            name='event_date'
            value={addEvent.event_date}
          />
        </label>
        <label>
          <input
            onChange={handleChange}
            className='location'
            placeholder='Location'
            type='text'
            name='event_location'
            value={addEvent.event_location}
          />
        </label>
        <button onClick={handleAdd} className='add'>
          Add
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
