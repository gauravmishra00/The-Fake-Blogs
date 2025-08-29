import React from 'react'
import { useState } from 'react'
import {  useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Logo, Input, Button } from "./index"
import authService from '../appwrite/Auth'
import { login as authLogin } from '../store/authSlice'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentAccount()
                if (userData) dispatch(authLogin(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='w-full bg-gray-700 text-white text-2xl'>
            <div>
                <div>
                    <span>
                        <Logo width='100%' />
                    </span>
                </div >
                <h2>Sign in to your account</h2>
                <p className='mb-4'> Don't have account ?&nbsp;
                    <Link to="/signup">Sign Up</Link>
                </p>

            </div>
            {error && <p className='text-red-700'>{error}</p>}
            <div>
                <div>
                    <form onSubmit={handleSubmit(login)}>
                        <div>
                            <Input
                                label="Email :"
                                type="email"
                                className="mb-5"
                                placeholder="Enter your Email : "
                                {...register("email",
                                    {
                                        required:true
                                    }
                                )}
                            />
                            <Input 
                            label="Password :"
                            type = "password"
                            className="mb-5"
                            placeholder = "Enter your password"
                            {...register("password",{
                                required : true
                            })}
                            />
                            <Button 
                            type="submit"
                            >
                                Sign In
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
