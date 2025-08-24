import React, { useId } from 'react'

function Select(
    {
        options,
        label,
        className = "",
        ...props
    }, ref
) {
    const id = useId()
    return (
        <div>
            {label && <label htmlFor={id} className={`text-gray-700 `} ></label>}
            <select
                id={id}
                className={`${className}`}
                {...props}
                ref={ref}>
                {options.map((option) => (
                    <option key={option}
                    value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)