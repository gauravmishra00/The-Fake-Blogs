import React from 'react'

function Button({
    children,
    type = "button",
    className = "",
    bgColor = "bg-blue-600",
    color = "text-yellow",
    ...props
}) {
  return (
    <button
    type={type}
    className={`${className} ${bgColor} ${color}`} 
    {...props}
    >{children}</button>
  )
}

export default Button