import React from 'react'
import { Link } from 'react-router-dom'

function GetOrder() {
  return (
    <div>
        <Link className="btn btn-outline-light" to="/getOrder">
           Order Now
          </Link>    </div>
  )
}

export default GetOrder