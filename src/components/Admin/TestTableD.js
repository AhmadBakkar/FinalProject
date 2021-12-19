import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";
import TestTable from './TestTable';
import './AllProducts.css';

//import { deleteUser, getAll, update } from './api/api';

 
const TestTableD = (props) => {

  const [items, setItems] = useState([]);


  const loadProducts = () => {
    Axios.get("http://localhost:3001/laptops", {
    }).then((res) => {
        console.log(res);
        setItems(res?.data);
        console.log(items)
    }
    )
};

/**
 * This is the first method to be called.
 */

useEffect(() => {
    loadProducts();

}, []);
  
  
 
  return (
    <div className="container">
      <div className="space">
      <Link to="/allProductsForm" >Manage Products </Link>
        </div>
        
        <TestTable
        data={items}
        />
      
      </div>
  );
};
 

 
export default TestTableD;