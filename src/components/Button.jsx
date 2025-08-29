import React from 'react'

function Button({
    children,
    type = "button",
    className = "",
    bgColor = "bg-gray-800",
    color = "text-yellow",
    ...props
}) {
  return (
    <button
    type={type}
    className={`${className} ${bgColor} ${color} w-24 rounded-2xl mb-5 py-2`} 
    {...props}
    >{children}</button>
  )
}

export default Button