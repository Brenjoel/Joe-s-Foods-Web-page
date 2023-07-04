import React, { Children } from 'react'
import { Link , Outlet } from 'react-router-dom'
import Header from './Header'
function Base({Children}) {
  return (
    <>
    <Header/>
    <br></br>
    {Children}
    </>
  )
}

export default Base