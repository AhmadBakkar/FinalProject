import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from "react";
import { Component } from "react";
import axios from "axios";
import {useHistory} from "react-router";
import {
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useDispatch } from 'react-redux';


const Product  = (props) => {
  const [search,setSearch] = useState('');
  const [items,setItems] = useState([]);
  const [cartItems,setCartItems] = useState([]);
  const [price,setPrice] = useState(0);
  const dispatch = useDispatch();

 console.log(cartItems)


 const history = useHistory();


  const loadProducts = () => {
    axios.get("http://localhost:3001/tablets", {
    }).then((res) => {
      console.log(res);
      setItems(res?.data);
    }
    )
  };

  /**
   * This is the first method to be called.
   */
   useEffect(()=>{
    loadProducts();
    
  },[]);

  const addToCart = (val) => {
    setCartItems([...cartItems, val]);
    localStorage.setItem("value",JSON.stringify(cartItems));
    console.log(cartItems);
    setPrice(val.Price);
    dispatch({type:'UP',value: price});
    console.log(price);
  }

  
    return (

      <ImageList sx={{ width: 750, height: 800 }} className="block col-2">
        <div >
          <input style={{ height: 40, width: 300 }} type="text" placeholder="Search" name="Search" onChange={(e) => { setSearch(e.target.value); }} />
        </div>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">Tablets</ListSubheader>
        </ImageListItem>
        {items.filter((val) => {
          if (search == "") {
            return val
          } else if (val.Description.toLowerCase().includes(search.toLowerCase())) {
            return val
          } else if (val.Name.toLowerCase().includes(search.toLowerCase())) {
            return val
          } else if (('' + val.Price).includes(search)) {
            return val
          }
        }).map((val) => (
          <ImageListItem key={val.id}>
            <img
              src={`${val.ImageSrc}?w=248&fit=crop&auto=format`}
              srcSet={`${val.ImageSrc}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={val.Name}
              loading="lazy"
            />
            <ImageListItemBar
              title={val.Name}
              subtitle={val.Description + "   " + val.Price + "\u0024"}

              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${val.Price}`}
                  onClick={() => addToCart(val)}>

                  <ShoppingCartOutlined />

                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }


export default Product;