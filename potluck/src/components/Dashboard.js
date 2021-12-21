import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import food from "../assets/food1.jpeg";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  const [addEvent, setAddEvent] = useState({
    user_id: 2,
    event_name: "",
    event_date: "2000-01-01T00:00:00",
    event_location: "",
  });

  useEffect(() => {
    axiosWithAuth()
      .get("/api/events/")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        <img className='food1' src={food} alt='food' />
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
      {events.map((event) => (
        <div className='potluck'>
          <div className='info'>
            <img className='food1' src={food} alt='food' />
            <h1>{event.event_name}</h1>
            <p>{event.event_date}</p>
            <p>{event.event_location}</p>
            <button className='edit'>Edit</button>
            <button className='delete'>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
