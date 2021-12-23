import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import food from "../assets/food1.jpeg";

const AddFood = (props) => {
  const { id } = useParams();

  const nav = useNavigate();

  const [items, setItems] = useState([]);
  const [setAdded] = useState([]);
  const [newItem, setNewItem] = useState({
    food_name: "",
  });

  const [guest, setGuest] = useState({
    user_id: "",
  });

  const [guestList, setGuestList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/events/${id}/food`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [items]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/events/${id}/guest`)
      .then((res) => {
        setGuestList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [guestList]);

  const handleChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleGuestChange = (e) => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddGuest = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/events/${id}/guest`, guest)
      .then((res) => {
        setGuest(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/events/${id}/food`, newItem)
      .then((res) => {
        setAdded(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setNewItem({
      food_name: "",
    });
  };

  const confirmAdd = () => {
    nav("/dashboard");
  };

  return (
    <>
      <div className="invite-con">
        <h1 className="guest-h1">Guest List</h1>
        <button onClick={handleAddGuest} className="invite-btn">
          Add
        </button>
        <input
          name="user_id"
          value={guest.user_name}
          onChange={handleGuestChange}
          className="invite-input"
          type="text"
        />
        <div className="list-names-con">
          {guestList.map((user) => (
            <li className="list-names" key={user.user_id}>
              {user.username}
            </li>
          ))}
        </div>
      </div>
      <div className="potluck-item">
        <img className="food1" src={food} alt="food" />
        <input
          onChange={handleChange}
          value={newItem.food_name}
          name="food_name"
          className="input-item"
          placeholder="Add Item"
        />
        <button onClick={handleAdd} className="add-item">
          Add Item
        </button>
        <div className="items">
          {items.map((item) => {
            return (
              <div key={item.food_id} className="items-list">
                {" "}
                <li>{item.food_name}</li>
              </div>
            );
          })}
        </div>
        <button onClick={confirmAdd} className="confirm-add">
          Submit
        </button>
      </div>
    </>
  );
};

export default AddFood;
