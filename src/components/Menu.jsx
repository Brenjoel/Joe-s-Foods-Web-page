import React from 'react'
import Item from './Item'
import i1 from '../images/l1.png'

function Hoc(){
alert("pora apadkodi")
}

const Menu = () => {
  return (
    <>
     <div> <br></br> <br></br><br></br></div>
    <div className='a' >
    <br></br>

      Menu
      <br></br>        <br></br>
    <br></br>

    </div>

    <div id='left' className='c'>
        <br></br>
        <img className='i' src={i1}></img>
        <br></br>
        <div className='c'> One   </div>
        Rs. 250
        <br></br>
        <div >
        <button > Order Now </button>
      </div>
      </div>
      <div id='mid'>
      <Item 
        name='Two'  
        cost='Rs.200'
        im={i1}
        />
      </div>
      <div id='right'>
      <Item 
        name='Three'  
        cost='Rs.200'
        im={i1}
        />
      </div>
            <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>
            <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>
            <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>
      <div id='left'>
        <Item 
        name='One'  
        cost='Rs.200'
        im={i1}
        />
        
      </div>
      <div id='mid'>
      <Item 
        name='Two'  
        cost='Rs.200'
        im={i1}
        />
      </div>
      <div id='right'>
      <Item 
        name='Three'  
        cost='Rs.200'
        im={i1}
        />

        
      </div>
      <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>
            <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>
            <div className='invisible'> c kkkj j j j j j j h hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </div>
      
    </>
  )
}

export default Menu;