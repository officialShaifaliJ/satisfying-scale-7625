import React, { useContext } from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Login";
import OnTheMenu from "../pages/On_the_menu";
import SignupCard from "../pages/Signup";
import { AuthContext } from "../context/AuthContext";
import Pricing from "../pages/Pricing";
export default function AllRoutes(){
const {isAuth}=useContext(AuthContext);
 return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={isAuth?(null):(<Login/>)}/>
    <Route path="/on_the_menu" element={<OnTheMenu/>}/>
    <Route path="/signup" element={<SignupCard/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
 </Routes>
}