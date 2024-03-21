import React from 'react'

const CreateGeneral = (props: any) => {
    const { 
        gridFormatView,
        children
     } = props
    return (
        <div>
            {gridFormatView ? children : "no"}
        </div>
    )
}

export default CreateGeneral
