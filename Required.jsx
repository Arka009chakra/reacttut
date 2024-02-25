import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import react from 'react'
import Dashboard from './Dashboard'
import Manage from "./Manage";
import Navbar from "./Navbar"
import {Routes, Route } from 'react-router-dom';
import Category from "./Category";
import Leave from "./Leave";
function App() {
    return (
        <>
        <Navbar/>
        <Routes>
         <Route exact path ="/" element={<Dashboard/>} />
         <Route exact path ="/manage" element={<Manage/>} />
         <Route exact path ="/category" element={<Category/>} />
         <Route exact path ="/manage" element={<Manage/>} />
         <Route exact path ="/leave" element={<Leave/>} />
        </Routes>
        </>
    )
 }
export default App;