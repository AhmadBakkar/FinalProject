import { Component, useEffect, useState } from "react";
import Axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dropdown from "../Reusable/Dropdown";
import VisualData from "../Data Visualization/VisualData";


const Table1 = (products) => {

  const [name,setName] = useState([]);
  const [data,setData] = useState([]);
  const [type,setType] = useState("");
 
    

    
    /**
     * This is the first method to be called.
     */
     useEffect(() => {
      loadProducts();
      loadCategories();
      console.log(type);
  }, []);

    /**
     * to get all the users from the db.
     */
    const loadProducts = () =>{
      try{
        Axios.get("http://localhost:3001/AllRecord",{
        data:  {
          type: type
        }
        }).then((res) => {
          console.log(res);
          setData(res?.data);
          console.log(data)
    }
 )}catch(err){
  console.log(err)
}
};

const loadCategories= () =>{
  Axios.get("http://localhost:3001/categories",{
  }).then((res) => {
    console.log(res);
    setName(res?.data);
    console.log(data)
}
)
};

const handleDropdown = (type) => {
  setType(type);
  console.log(type)

  
};

     
        return (
          <><Dropdown data={name} onChange={handleDropdown} value={type}/>
          
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Image Path</TableCell>
                  <TableCell>Model</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, index) => {
                  return (
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.ImageSrc}</TableCell>
                      <TableCell>{item.Name}</TableCell>
                      <TableCell>{item.Description}</TableCell>
                      <TableCell>{item.Price}</TableCell>

                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer></>
  );

      
}
 
export default Table1;