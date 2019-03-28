import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';
const Navigation  = ()=>{
return (
  <div>
<NavLink activeClassName="Linkcss" exact to="/"> Home</NavLink> | 
<NavLink activeClassName="Linkcss" to="/contact">Contact</NavLink> | 
<NavLink activeClassName="Linkcss" to="/about">About</NavLink> | 
<NavLink activeClassName="Linkcss" to="/posts">Posts</NavLink>  
  </div>
)
}

export default Navigation;