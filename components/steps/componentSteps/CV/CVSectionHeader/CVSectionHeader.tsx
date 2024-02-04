import React, { useEffect, useState } from 'react'

const CVSectionHeader = (props: any) => {
    const { perInfData } = props
    const [dataPerson, setDataPerson] = useState<any[]>()
    useEffect(() => {
        setDataPerson(perInfData)
    }, [props])

    return (
        <div>
            <header>
                {
                    dataPerson?.map((item: any) => (
                        <div key={item.fullname}>
                            <h1>{item.fullname}</h1>
                            <h2>Content Manager</h2>
                            <ul>
                                <li>{item.email}</li>
                                <li>{item.phone}</li>
                                <li>{item.birthsday}</li>
                                {/* <li><a href="https://linkedin.com/rbaezgull">linkedin.com/rbaezgull</a></li> */}
                            </ul>
                        </div>
                    ))
                }
            </header>
        </div>
    )
}

export default CVSectionHeader
