
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Dashbord from './Pages/Dashbord'
import Projects from './Pages/Projects'
import Auth from './Pages/Auth'
import Footer from './Components/Footer'


function App() {


  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashbord/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/login' element={<Auth/>}/>
    <Route path='/register' element={<Auth fromRegisterPage={true}/>}/>

   </Routes>
   <Footer/>
    </>
  )
}

export default App
