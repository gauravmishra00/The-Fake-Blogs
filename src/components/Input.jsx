import React from 'react'
import { useId, forwardRef } from 'react'
const Input = forwardRef(
    function Input({
        type = 'text',
        label,
        placeholder,
        className,
        ...props
    }, ref) {
        const id = useId();
        return (
            <div>
                {label ?
                    <label
                        htmlFor={id}
                    >
                        {label}
                    </label> : null}
                <input 
                type={type}
                id={id}
                placeholder={placeholder} 
                className={`border px-2 py-1 rounded ${className}`}
                ref={ref}
                {...props}
                />
            </div>
        )
    }
)

export default Input