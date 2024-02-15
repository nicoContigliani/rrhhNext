import React, { useEffect, useState } from 'react'
import styles from './section.module.css'
const CVsectionheaderdescription = (props: any) => {
    const { perDescData, titleHeader } = props
    const [dataPerson, setDataPerson] = useState<any[]>()
    useEffect(() => {
        setDataPerson(perDescData)
    }, [props])
    return (
        <div>
        

            <div className={styles.cvsection}>
                <h2 className={styles.sectionHeader}>{titleHeader}</h2>
                <section className={styles.List}>
                    {dataPerson?.map((Item: any) => (
                        <div key={Item.descriptionPerson} className={styles.Item}>
                            <p className={styles.Detail}>{Item.descriptionPerson}</p>
                        </div>
                    ))}
                </section>
            </div>


        </div>
    )
}

export default CVsectionheaderdescription
