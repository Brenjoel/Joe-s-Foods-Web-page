import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Item from './Item';
import m from '../images/food order.png'


function GetOrder() {

  let navigate = useNavigate();
  const [user, setUser] = useState({ name: "", phno: 0, item:"" });
  const { item,name, phno } = user;
  
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/menu")
  }


  const [selectoption, setSelectoption] = useState('');

  const HandleOnselect = (event) => {
    setSelectoption(event.target.value);
  }

  const options=['Chicken Biryani','Pot Biryani','Dilkush Biryani','Fish Biryani','Prawn Biryani',
  'Mutton Biryani','Cashew Biryani','Paneer Biryani','Mushroom Biryani',
              'Ice-Cream','Drink','Cake']

  return (
    <>
    <div>
      <div> <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br> </div>

<div id='cen'style={{padding:41}}>
<div className='c' > <h3>  <img src={m} /> </h3>    <br></br>     </div>

      <h3 className='a'> Order Your Food Here </h3>
{/* <div id='cen'> */}
<table> 
  <th> 
      <form onSubmit={(e) => onSubmit(e)} className='c'>
        
          <label for="name" > <h3> Name: </h3>            </label>
          <input type='text' placeholder='Enter your name' name='name' value={name} onChange={(e) => onInputChange(e)} />

          <label for="name"> <h3> Phone number: </h3>            </label>
          <input type='number' placeholder='Enter your mobile number' name='phno' value={phno} onChange={(e) => onInputChange(e)} />
          
         
          <label for="item"> <h3> Item: </h3>            </label>

          <select name='item' value= {item} onChange={(e) => onInputChange(e)} >
            <optgroup label='Non Veg'>
              <option value={'Chicken Biryani'}>Chicken Biryani</option>
              <option value={'Pot Biryani'}>Pot Biryani</option>
              <option value={'Dilkush Biryani'}>Dilkush Biryani</option>
              <option value={'Fish Biryani'}>Fish Biryani</option>
              <option value={'Prawn Biryani'}>Prawn Biryani</option>
              <option value={'Mutton Biryani'}>Mutton Biryani</option>
            </optgroup>
            <optgroup label=' Veg'>
              <option value={'Cashew Biryani'}>Cashew Biryani</option>
              <option value={'Paneer Biryani'}>Paneer Biryani</option>
              <option value={'Mushroom Biryani'}>Mushroom Biryani</option>
            </optgroup>
            <optgroup label=' Desserts'>
              <option value={'Ice-Cream'}>Ice-Cream</option>
              <option value={'Cake'}>Cake</option>
              <option value={'Drink'}>Soft Drinks</option>
            </optgroup>
          </select>



          <div><br></br></div>

     

          <button type='submit'> Place Order</button>
          <span className='invisible'> eefefe </span>
          <button > <Link className="btn btn-outline-danger mx-2" to='/'>Cancel</Link></button>
       









      </form>
      </th>
      </table>

       {/* </div> */}
      <br></br>
      <br></br>
      <div className='invisible'>eg</div>
      <div className='invisible'>egggggggggggggggggggggggg</div>
      <div className='invisible'>e</div>

      </div>
    </div>
    </>

  )
}

export default GetOrder;