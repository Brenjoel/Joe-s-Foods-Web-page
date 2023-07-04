import React from 'react'
import { Link , Outlet } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div >
       
       <nav>
         <ul >
         <li> <h5> <Link  to='/' > Home </Link> </h5>  </li>
         <li> <h5><Link  to='/Menu' > Menu </Link></h5>   </li>
         <li><h5> <Link  to='/GetOrder' > New Order </Link> </h5>  </li>
         <li><h5> <Link  to='/Ord' > Orders Data </Link></h5>  </li>
         <li><h5><Link  to='/Contact' > Contact </Link> </h5>  </li>
        
       </ul>
       </nav>
     
       <Outlet />
   </div>
    </div>
  )
}

export default Header
