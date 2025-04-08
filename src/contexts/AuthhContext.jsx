import React, {  useState } from 'react'
import { createContext } from 'react'

export const AuthContext=createContext()
const AuthhContext = ({children}) => {
  

  const[isLoggedIn,setIsLoggedin]=useState([])


  
  return (
    <div>
 <AuthContext.provider value={{isLoggedIn,setIsLoggedin}}>
  {children}

</AuthContext.provider>

    </div>
    

    

  )
}

export default AuthhContext