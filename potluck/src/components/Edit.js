import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useNavigate, useParams } from "react-router-dom";
import food from "../assets/food1.jpeg";

const Edit = (props) => {
  const { id } = useParams();
  const nav = useNavigate();

  const [edit, setEdit] = useState({
    user_id: props.events.length + 1,
    event_name: "",
    event_date: "2000-01-01T00:00:00",
    event_location: "",
  });

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/events/${id}`)
      .then((res) => {
        setEdit(res.data);
      });
  }, []);

  const handleChange = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = (e) => {
    nav("/dashboard");
  };

  const confirmEdit = () => {
    // nav("/dashboard");
    //PUT REQUEST HERE--- NEEDS WORK
  };

  return (
    <div className="potluck-edit">
      <div className="info-edit">
        <label className="label">
          <img className="food1" src={food} />
          <input
            onChange={handleChange}
            className="name"
            name="event_name"
            value={edit.event_name}
          />
        </label>
        <br />
        <label>
          <input
            onChange={handleChange}
            className="date"
            name="event_date"
            value={edit.event_date}
          />
        </label>
        <label>
          <input
            onChange={handleChange}
            className="location"
            name="event_location"
            value={edit.event_location}
          />
        </label>
        <button onClick={handleCancel} className="cancel">
          Cancel
        </button>
        <button onClick={confirmEdit} className="confirm-btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Edit;
