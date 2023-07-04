import React from 'react';
import { Link , Outlet,useNavigate , Routes, Route , BrowserRouter, Navigate} from 'react-router-dom';
// import Base from './Base';
import Ord from './Ord';

function  Item(prop) {
 
const Order = useNavigate();

const navOrd=()=>{
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
          {prop.name}
          <br></br>
        {prop.cost}
      
       </div>

 
    </>
  )
}

export default Item;