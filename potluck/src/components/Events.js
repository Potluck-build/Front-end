import React from "react";
import food from "../assets/food1.jpeg";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";

const Events = (props) => {
  const { event } = props;

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`/api/events/${event.event_id}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="potluck">
      <div className="info">
        <img className="food1" src={food} alt="food" />
        <h1>Event Name:</h1>
        <br /> <h2>{event.event_name}</h2>
        <p>{event.event_location}</p>
        <p>{event.event_date}</p>
        <button className="edit">Edit</button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Events;
