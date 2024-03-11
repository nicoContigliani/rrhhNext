import React from 'react'

const ComponentModalTable = (props: any) => {
    const { todo, setRecordData } = props
    setRecordData(todo)

    return (
        <div>
            {props.children}
        </div>
    )
}

export default ComponentModalTable
