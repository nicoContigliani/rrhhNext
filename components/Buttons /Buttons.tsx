import React from 'react'

const Buttons = ({
    textlavel,
    children,
    className,
    onClick
}: any) => {
    return (
        <button className={className}
        onClick={onClick}
        >
            {children ? children : textlavel}
        </button>
    )
}

export default Buttons
