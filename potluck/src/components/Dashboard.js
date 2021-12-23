import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import food from "../assets/food1.jpeg";
import Events from "./Events";

const Dashboard = (props) => {
  const { login, events } = props;

  const [addEvent, setAddEvent] = useState({
    user_id: props.events.length + 1,
    event_name: "",
    event_date: "2000-01-01T00:00:00",
    event_location: "",
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/events/")
      .then((res) => {
        props.setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.events]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/users")
      .then((res) => {
        setUsers(res.data);
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
    console.log(login);
  };

  const handleAdd = () => {
    axiosWithAuth()
      .post("/api/events/", addEvent)
      .then((res) => {
        props.setNewEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setAddEvent({
      user_id: props.events.length + 1,
      event_name: "",
      event_date: "2000-01-01T00:00:00",
      event_location: "",
    });
  };

  return (
    <>
      {users.map((user) => {
        if (user.username === login) {
          return <h1>{user.username}</h1>;
        }
      })}
      <div className="potlucks-con">
        <div className="potluck">
          <img className="food1" src={food} alt="food" />
          <label className="label">
            <input
              onChange={handleChange}
              className="name"
              placeholder="Name"
              name="event_name"
              value={addEvent.event_name}
            />
          </label>
          <br />
          <label>
            <input
              onChange={handleChange}
              placeholder="mm/dd/yy"
              className="date"
              type="datetime-local"
              name="event_date"
              value={addEvent.event_date}
            />
          </label>
          <label>
            <input
              onChange={handleChange}
              className="location"
              placeholder="Location"
              type="text"
              name="event_location"
              value={addEvent.event_location}
            />
          </label>
          <button onClick={handleAdd} className="add">
            Add
          </button>
        </div>
        {props.events.map((event) => (
          <Events
            newEvents={props.newEvents}
            setNewEvents={props.setNewEvents}
            key={event.event_id}
            event={event}
            events={props.events}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
