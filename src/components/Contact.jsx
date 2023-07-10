import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Contact() {
  return (
    <>
    <div> <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br> </div>
      <div className='a' > <h3 style={{backgroundColor:'white' }}>  Contact </h3>    <br></br>     </div>
      <div className='c' id='cen1'>
      <div style={{fontSize:'33px'}}> GitHub      <SocialIcon network='github' url='https://github.com/Brenjoel'/> </div>
      <br></br>
      <div style={{fontSize:'33px'}}> LinkedIn          <SocialIcon network='linkedin' url='https://www.linkedin.com/in/brenjoel-sikha-57a6b6216'/> </div>
      <br></br>    
      </div>
    
    </>
  )
}

export default Contact