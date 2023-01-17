import React from "react";
import { Link } from "react-router-dom";
 export default function Navbar(){
    return <div>
        <Link to="/">Home</Link>
        <Link to="/on-the-menu">On the menu</Link>
        <Link to="/login">Login</Link>
    </div>
 }