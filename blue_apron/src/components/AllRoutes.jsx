import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Login";
import OnTheMenu from "../pages/On_the_menu";

export default function AllRoutes(){
 return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/on_the_menu" element={<OnTheMenu/>}/>
 </Routes>
}