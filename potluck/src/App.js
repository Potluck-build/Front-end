import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import AddFood from "./components/AddFood";
import styled from "styled-components";
import Edit from "./components/Edit"

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

const initialDisabled = false;

const App = () => {
  const [formValues] = useState(initialFormValues);
  const [formErrors] = useState(initialFormErrors);
  const [disabled ] = useState(initialDisabled);

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  const [events, setEvents] = useState([]);
  const [newEvents, setNewEvents] = useState([]);


  

  return (
    <AppContainer>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <RouteContainer>
        <Routes>
          <Route
            path='/'
            element={
              <Login
                values={formValues}
                errors={formErrors}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          <Route
            path='/login'
            element={
              <Login
                values={formValues}
                errors={formErrors}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          <Route
            path='/register'
            element={
              <Register
                values={formValues}
                disabled={disabled}
                errors={formErrors}
              />
            }
          />

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
          <Route path="/add-food" element={<AddFood />} />

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-food' element={<AddFood />} />

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
