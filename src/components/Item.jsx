import React from 'react';
import { Link, Outlet, useNavigate, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
// import Base from './Base';
import Ord from './Ord';

function Item(prop) {

  const Order = useNavigate();

  const navOrd = () => {
    Order('./Ord');
  }

  return (
    <>

      <div className='c'>
        <div >
          <br></br>
          <img src={prop.im} className='i'></img>


        </div>
        <br></br>
        <div id='f1'> {prop.name} </div>
        
        <br></br>
        <div style={{fontFamily:'cursive'}}> {prop.desc} </div>

        <br></br>
        <div id='f2'> {prop.cost} </div>

        <br></br>

        <br></br>


      </div>

    </>
  )
}

export default Item;