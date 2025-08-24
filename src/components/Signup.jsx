import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {Logo,Button,Input} from "./index"
import {  useForm } from 'react-hook-form'
import authService from '../appwrite/Auth'
import { Link,useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
function Signup() {

    const dispatch = useDispatch()
    const {register,handleSubmit } = useForm()
    const [error , setError] = useState("")
    const navigate = useNavigate()
    const create = async (data)=>
    {
        setError("")
        try {
            const session = await authService.createAccount(data)
        if(session)
        {
            const userData = await authService.getCurrentAccount()
            if(userData) dispatch(login(userData))
            navigate("/")
        }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div>
        <div>
            <h2>Sign up to create new Account</h2>
            <p>
                already have an account?
                <Link to="/login">
                Sign In
                </Link>
            </p>
            {error && <p className='text-red-700'>{error}</p>}

            <form onSubmit={handleSubmit(create)}>
                <div>
                    <Input
                    label = "Name :"
                    type = "text"
                    placeholder = "Enter your name"
                    {...register("name",{
                        required:true
                    })}
                    />
                    <Input
                    label = "Email :"
                    type = "email"
                    placeholder = "Enter your Email"
                    {...register("email",{
                        required:true
                    })}
                    />
                    <Input
                    label = "Password :"
                    type = "password"
                    placeholder = "Enter your password"
                    {...register("password",{
                        required:true
                    })}
                    />
                    <Button type='submit'>Sign Up</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup