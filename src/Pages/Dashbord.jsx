import React from 'react'
import Header from '../Components/Header'
import Profile from '../Components/Profile'
import ViewProject from '../Components/ViewProject'

const Dashbord = () => {
  return (
    <div><Header insideDashBoard={true} />

    <div style={{paddingTop:"20px"}} className="container-fluid">
      <div className="d-flex justify-content-between">
        <h1>Welcome  <span className='text-warning'>User,</span></h1>
        <Profile/>
      </div>
      <div className="row">
        <div className="col-lg-8"><ViewProject/></div>
        <div className="col-lg-4"></div>
      </div>
    </div>
    
    </div>
  )
}

export default Dashbord