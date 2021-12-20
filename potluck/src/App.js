import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import AddFood from "./components/AddFood";

const App = () => {
  return (
    <div className='App'>
      Potluck Planner
      <Header />
      <Routes>
        <Route path='/' component={Login} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/add-food' component={AddFood} />
      </Routes>
    </div>
  );
};

export default App;
