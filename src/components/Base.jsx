import React from 'react'
import { Link , Outlet } from 'react-router-dom'
function Base() {
  return (
    <div >
       
        <nav>
          <ul >
          <li> <Link className="btn btn-outline-light" to='/' > Home </Link>   </li>
          <li> <Link className="btn btn-outline-light" to='/Menu' > Menu </Link>   </li>
          <li> <Link className="btn btn-outline-light" to='/Ord' > Orders </Link>   </li>
          <li> <Link className="btn btn-outline-light" to='/Contact' > Contact </Link>   </li>
          
         
        </ul>
        </nav>
      
        <Outlet />
    </div>
  )
}

export default Base