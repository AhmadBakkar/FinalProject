import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";
import Table1 from './Table1';
import './AllProducts.css';
//import { deleteUser, getAll, update } from './api/api';

 
const AllProducts = () => {
  const [status, setStatus] = useState("");
  
  useEffect(()=>{
    setStatus(window.sessionStorage.getItem("admin"));
  },[]);
  
 
  return (
    <div className="container">
      <h1>Hello, <span> {status}</span></h1>
      <div className="space">
      <Link to="/allProductsForm" >Manage Products</Link>
        </div>
        
        <Table1></Table1>
      
      </div>
  );
};
 

 
export default AllProducts;