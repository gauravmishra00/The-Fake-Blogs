import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/Auth';
import { login,logout } from './store/authSlice'; 
import {Header,Footer} from "./components/index"
import { Outlet } from 'react-router-dom';
function App() {

  const [loading , setLoading] = useState(true);
  const disptach = useDispatch();

  useEffect(() => {
    authService.getCurrentAccount()
    .then((userData) => {
      if(userData)
      {
        disptach(login(userData))
      }else{
        disptach(logout())
      }
  })
    .catch((error)=> console.log(error))
    .finally(()=>setLoading(false))
  }, [])
  
  return !loading ? (
    <div>
      <div>
        <Header/>
        Todo
        {/* <Outlet/> */}
        <Footer/>
      </div>
    </div>
  ):null
}

export default App
