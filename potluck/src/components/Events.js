import React from "react";
import food from "../assets/food1.jpeg";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";
import Edit from "./Edit";

const Events = (props) => {
  const nav = useNavigate();

  const { event } = props;

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`/api/events/${event.event_id}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAdd = () => {
    nav(`/add-food/${event.event_id}`);
  };

  return (
    <div className="potluck">
      <div className="info">
        <img className="food1" src={food} alt="food" />
        <h1 className="event-name">Event Name</h1>
        <br /> <h2 className="event-name-title">{event.event_name}</h2>
        <p className="event-location">{event.event_location}</p>
        <p className="event-time">{event.event_date}</p>
        <button onClick={handleAdd} className="edit">
          Food
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Events;
