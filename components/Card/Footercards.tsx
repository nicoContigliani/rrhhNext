import React from 'react'

const Footercards = (props: any) => {
    return (
        <div {...props}>
            {props.children}
        </div>
    )
}

export default Footercards
