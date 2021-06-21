import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    console.log("Navbar valaa");
    return (
        <>
         <div class="nav">
        <div class="nav-header">
            <div class="nav-title">
            </div>
        </div>
        <div class="nav-links">
        <Link to="/ShowTodo">Todo Data</Link>
        <Link to="/DeleteData">Deleted Todo</Link>
  </div>
  </div>

 </>
    )
}
export default Navbar