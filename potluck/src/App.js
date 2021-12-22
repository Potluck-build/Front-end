import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import AddFood from "./components/AddFood";
import styled from "styled-components";

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


  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((resp) => {
        setUsers(resp.data.data);
      })
      .catch((err) => console.error(err));
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((resp) => {
        console.log(resp);
        setUsers([resp.data, ...users]);
      })
      .catch((err) => console.error(err))
      .finally(() => setFormValues(initialFormValues));
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      password: formValues.password.trim(),
    };

    postNewUser(newUser);
  };

  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);


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
