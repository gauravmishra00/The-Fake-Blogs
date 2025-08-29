import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/Auth';
import { login, logout } from './store/authSlice';
import { Header, Footer } from "./components/index"
import { Outlet } from 'react-router-dom';
function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentAccount()
      .then((userData) => {
        if (userData) {
          console.log(userData)
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
      }).catch((error) => {
        console.log(error)
        //when error loggin out
        dispatch(logout())
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div>
      <div>
        <Header />
        Todo
        <Outlet />
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
