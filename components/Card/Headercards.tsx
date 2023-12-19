import React, { Children } from 'react'

const Headercards = (props: any) => {
    return (
        <div {...props}>
            {props.Children}
        </div>
    )
}

export default Headercards
