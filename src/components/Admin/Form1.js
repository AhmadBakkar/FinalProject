import React, { useState, useEffect } from 'react';
//import { deleteUser, getAll, update } from './api/api';
import './Form1.css';
import {useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Axios from 'axios'
import Dropdown from '../Reusable/Dropdown';

const Form1 = () => {

  const [id, setId] = useState("");
  const [image, setImageP] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState([]);

  const history = useHistory();

  useEffect(()=>{
    loadCategories();
    handleDropdown();
    setStatus("");
  },[]);

  const loadCategories= () =>{
    Axios.get("http://localhost:3001/categories",{
    }).then((res) => {
      console.log(res);
      setCategories(res?.data);
      console.log(categories)
  }
  )
  };


  const insertProduct = () => {
    try{
    Axios.post("http://localhost:3001/insert", {
      id: id,
      image:image,
      name:name,
      description:description,
      price:price,
      categoryName: categoryName
    }).then((response) => {
        if(response.data.message){
          setStatus(response.data.message)
        }else{
          setStatus("Error!!")
      }
    })     
  }catch(err){
    console.log(err)
    setStatus("Error!!")
  }
  };

  const updateProduct = () => {
    try{
      console.log(id);
    Axios.post("http://localhost:3001/update", {
      id: id,
      image:image,
      name:name,
      description:description,
      price:price,
      categoryName: categoryName
      
  }).then((response) => {
      
    if(response.data.message){
      setStatus(response.data.message)
    }else{
      setStatus("Error!!")
    }
  })
     
}catch(err){
  console.log(err)
  setStatus("Error!!")
}
};

  const deleteProduct = () => {
    try{
    Axios.post("http://localhost:3001/delete", {
      id: id,
      image:image,
      name:name,
      description:description,
      price:price,
      categoryName: categoryName
  }).then((response) => {
      
    if(response.data.message){
      setStatus(response.data.message)
    }else{
      setStatus("Error!!")
    }
  })
     
}catch(err){
  console.log(err)
  setStatus("Error!!")
}
};

const selectedfile = () => {
  setStatus(image);
}

const handleDropdown = (categoryName) => {
  setCategoryName(categoryName);
  console.log(categoryName);

  
};



  const back = () => {
    history.push("/allProducts");
  }





  return (
    <div className="form">
      <form>
      <div className="form">
          <Dropdown data={categories} onChange={handleDropdown} value={categoryName} id="outlined-basic" label="Id" variant="outlined" />
        </div>
        <div className="form">
          <TextField id="outlined-basic" label="Id" variant="outlined" onChange={(e) => { setId(e.target.value); }}/>
        </div>
        <div className="form">
          <TextField id="outlined-basic" label="Image URL" variant="outlined" onChange={(e) => { setImageP(e.target.value); }}/>
        </div>
        <div className="form">
          <TextField type="file" onChange={(e) => { setImageP(e.target.files[0].name); }}/>
        </div>
        <div className="form">
          <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => { setName(e.target.value); }}/>
        </div>
        <div className="form">
          <TextField id="outlined-basic" label="Description" variant="outlined" onChange={(e) => { setDescription(e.target.value); }}/>
        </div>
        <div className="form">
        <TextField id="outlined-basic" label="Price" variant="outlined" onChange={(e) => { setPrice(e.target.value); }}/>
        </div>
      </form>
      <div className="is-grouped">
      <Button variant="contained" color="success" className="button" onClick={insertProduct} >Save</Button>
          <Button variant="outlined" color="error" className="button" onClick={deleteProduct}>Delete</Button>
          <Button variant="outlined" className="button" onClick={updateProduct}>Update</Button>
          <Button variant="outlined" className="button" onClick={back} >Back</Button>
        </div>
        <h1>{status}</h1>
    </div>
  );
};



export default Form1;