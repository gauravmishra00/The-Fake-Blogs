import React, { use } from 'react'
import authService from '../appwrite/Auth'
import { logout } from "../store/authSlice"
import { useDispatch } from 'react-redux'
function LogoutBtn() {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
            .then(() => (
                dispatch(logout())
            )).catch((error) => console.log(error))
    }
    return (
        <button
        onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn