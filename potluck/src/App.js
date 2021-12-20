import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import AddFood from "./components/AddFood";

const App = () => {
  return (
    <div>
      <Header />
      <h1>Potluck Planner</h1>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/add-food' element={<AddFood />} />
      </Routes>
    </div>
  );
};

export default App;
