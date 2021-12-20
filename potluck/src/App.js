import "./App.css";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import AddFood from "./components/AddFood";
import styled from 'styled-components';

const App = () => {
    return (
        <AppContainer>
            <Header/>
            <RouteContainer>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/add-food' element={<AddFood/>}/>
                </Routes>
            </RouteContainer>
        </AppContainer>
    );
};

export default App;

const AppContainer = styled.div`
  height: 100%
`
const RouteContainer = styled.div`
  height: 100%
`
