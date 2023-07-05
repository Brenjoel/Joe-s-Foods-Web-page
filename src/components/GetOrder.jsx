import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function GetOrder() {

  let navigate = useNavigate();
  const [user,setUser]=useState({ name:"" , phno:0 , item:"" });

  const {name,phno,item}=user;

  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user",user);
    navigate("/menu")
  }

  const onchange1=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }


  const [selectoption ,setSelectoption]=useState('');

  const HandleOnselect=(event)=>{
    setSelectoption(event.target.value);
  }


  return (
    <div>
           <div> <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br> </div>

    <h3 className='a'> Order Your Food Here </h3>

    <form onSubmit={(e)=> onSubmit(e)}>
      <div id='cen'>
      <label for="name"> <h3> Name: </h3>            </label> 
      <input type='text' placeholder='Enter your name' name='name' value={name} onChange={(e) => onchange1(e)}/>
      
      <label for="name"> <h3> Phone number: </h3>            </label> 
      <input type='number' placeholder='Enter your mobile number' name='phno' value={phno} onChange={(e) => onchange1(e)}/>

      <label for="Item"> <h3> Item: </h3>            </label> 
      <select id='item' value={item} onChange={(e) => onchange1(e)} >
        <optgroup label='Non Veg'>
          <option value='Chicken Biryani'>Chicken Biryani</option>
          <option value='Pot Biryani'>Pot Biryani</option>
          <option value='Dilkush Biryani'>Dilkush Biryani</option>
          <option value='Fish Biryani'>Fish Biryani</option>
          <option value='Prawn Biryani'>Prawn Biryani</option>
          <option value='Mutton Biryani'>Mutton Biryani</option>
        </optgroup>
        <optgroup label=' Veg'>
          <option value='Cashew Biryani'>Cashew Biryani</option>
          <option value='Paneer Biryani'>Paneer Biryani</option>
          <option value='Mushroom Biryani'>Mushroom Biryani</option>
        </optgroup>
        <optgroup label=' Desserts'>
          <option value='Ice-Cream'>Ice-Cream</option>
          <option value='Cake'>Cake</option>
          <option value='Drink'>Drink</option>
        </optgroup>
      </select>
    <div><br></br></div>

    <label for="cars">Choose a car:</label>
      <select  id="cars" value={selectoption} onChange={HandleOnselect}>
        <option value="">Select a car</option>
        <option value="Volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select  >
      <button  type='submit'>Place Order</button> 

      <button > <Link className="btn btn-outline-danger mx-2" to='/'>Cancel</Link></button>
      </div>
      <h2>{selectoption}</h2>


    






    </form>

    </div>
          
  )
}

export default GetOrder