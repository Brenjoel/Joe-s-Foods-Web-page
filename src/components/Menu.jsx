import React from 'react'
import Item from './Item'
import i1 from '../images/l1.png'
import { Link, Outlet } from 'react-router-dom'
function Hoc(){
alert("pora apadkodi")
}

function Menu(){
  return (
    <>
    
     <div> <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br> </div>
     <div className='a' > <h3>  Menu </h3>    <br></br>     </div>
     <div id='c'>   <h5>Main Course</h5>             </div>
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

  <div id='c'> <h5>Desserts</h5>            <br></br><br></br>   </div>
     
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