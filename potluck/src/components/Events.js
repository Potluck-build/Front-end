import React from "react";
import food from "../assets/food1.jpeg";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";

const Events = (props) => {
  const { event, setEvents } = props;

  const nav = useNavigate();

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`/api/events/${event.event_id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    nav("/edit");
  };

  return (
    <div className="potluck">
      <div className="info">
        <img className="food1" src={food} alt="food" />
        <h1>{event.event_name}</h1>
        <p>{event.event_date}</p>
        <p>{event.event_location}</p>
        <button onClick={handleEdit} className="edit">
          Edit
        </button>
        <button onClick={handleDelete} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Events;
