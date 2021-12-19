import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './MenuElements';
import {
  ShoppingCartOutlined,
} from "@material-ui/icons";
  
const Menu = (props) => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Laptops' activeStyle>
            Laptops
          </NavLink>
          <NavLink to='/ipads' activeStyle>
            Tablets
          </NavLink>
          <NavLink to='/data' activeStyle>
            Data Visualization
          </NavLink>
          <NavLink to='/Currency' activeStyle>
            Currency
          </NavLink>
          <NavLink to='/checkout' activeStyle>
          <ShoppingCartOutlined />
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/admin'>Admin</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Menu;