import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import AddFood from "./components/AddFood";
import styled from "styled-components";
import axios from "axios";
import React, { useState } from "react";
import Edit from "./components/Edit";

//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
const initialFormValues = {
  ///// TEXT INPUTS /////
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  const [events, setEvents] = useState([]);
  const [newEvents, setNewEvents] = useState([]);

  return (
    <AppContainer>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <RouteContainer>
        <Routes>
          <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route
            path="/login"
            element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              <Dashboard
                newEvents={newEvents}
                setNewEvents={setNewEvents}
                events={events}
                setEvents={setEvents}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <Edit
                newEvents={newEvents}
                setNewEvents={setNewEvents}
                events={events}
                setEvents={setEvents}
              />
            }
          />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-food/:id" element={<AddFood events={events} />} />
        </Routes>
      </RouteContainer>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  height: 100%;
`;
const RouteContainer = styled.div`
  height: 100%;
`;
