import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import food from "../assets/food1.jpeg";

const AddFood = (props) => {
  const { events } = props;

  const { id } = useParams();

  const nav = useNavigate();

  const [items, setItems] = useState([]);
  const [added, setAdded] = useState([]);
  const [newItem, setNewItem] = useState({
    food_name: "",
  });

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

  const handleChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
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
        <span className="plus">&#43;</span>
        <button className="invite-guest">Invite Guest</button>
      </div>
      <div className="potluck-item">
        <img className="food1" src={food} />
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
