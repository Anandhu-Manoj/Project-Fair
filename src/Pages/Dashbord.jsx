import React from 'react'
import Header from '../Components/Header'
import Profile from '../Components/Profile'
import ViewProject from '../Components/ViewProject'

const Dashbord = () => {
  return (
    <div><Header insideDashBoard={true} />

    <div style={{paddingTop:"20px"}} className="container-fluid">


      {/* <div className="d-flex justify-content-between">
        
        
      </div> */}
      <div className="row">
        <div className="col-lg-8"><h1>Welcome  <span className='text-warning'>{sessionStorage.getItem('user')?sessionStorage.getItem('user'):"user"},</span></h1><ViewProject/></div>
        <div className="col-lg-4"><Profile/></div>
      </div>
    </div>
    
    </div>
  )
}

export default Dashbord