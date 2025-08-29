import React, { act } from 'react'
import { Logo, LogoutBtn, Container } from '../index'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  // const authStatus = useSelector((state) => state.auth.status)
  const authStatus = useSelector((state) => state.auth?.status ?? false)
  const navigate = useNavigate()
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "SignUp",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus
    }
  ]
  return (
    <header className='w-full  bg-red-700 '>
      <nav>
        <div>
          <Link
            to='/'
          >
            <Logo />
          </Link>
        </div>
        <ul  className='list-none flex gap-5 '>
          {navItems.map((item) =>
          (
            item.active ? (
              <li
                key={item.name}
               
              >
                <button
                  onClick={() => navigate(item.slug)}
                >{item.name}</button>
              </li>
            ) : null
          )
          )}
          {
            authStatus && (
              <li><LogoutBtn/></li>
            )
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header