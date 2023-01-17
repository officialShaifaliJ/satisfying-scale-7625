import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Login";
import On_the_menu from "../pages/On_the_menu";

export default function AllRoutes(){
 return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/on-the-menu" element={<On_the_menu/>}/>
 </Routes>
}