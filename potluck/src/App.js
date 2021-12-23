import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import AddFood from "./components/AddFood";
import styled from "styled-components";
import Edit from "./components/Edit";

import React, { useState } from "react";

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
  const [formValues] = useState(initialFormValues);
  const [formErrors] = useState(initialFormErrors);

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  const [events, setEvents] = useState([]);
  const [newEvents, setNewEvents] = useState([]);

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  return (
    <AppContainer>
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        login={login}
        setLogin={setLogin}
      />
      <RouteContainer>
        <Routes>
          <Route
            path="/"
            element={
              <Login
                values={formValues}
                errors={formErrors}
                setLoggedIn={setLoggedIn}
                login={login}
                setLogin={setLogin}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                values={formValues}
                errors={formErrors}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                login={login}
                setLogin={setLogin}
              />
            }
          />
          <Route
            path="/register"
            element={<Register values={formValues} errors={formErrors} />}
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
                login={login}
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
