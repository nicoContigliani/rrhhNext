import React, { useEffect, useState } from 'react'
import styles from './section.module.css'
const CvsectionjobsFree = (props: any) => {
    const { data, titleHeader } = props
    const [dataProps, setDataProps] = useState<any[]>()
    useEffect(() => {
        setDataProps(data)
    }, [props])



    return (
        <div className={styles.cvsection}>
            <h2 className={styles.sectionHeader}>{titleHeader}</h2>
            <section className={styles.List}>
                {dataProps?.map((Item: any) => (
                    <div key={Item.start} className={styles.Item}>
                        <h3 className={styles.titlePrincipal}>{Item.company} <span className={styles.titleSecondary}>({Item.job})</span>
                        </h3> 
                        <span className={styles.TitlePeriod}> ({Item.start}/{Item.finish})</span> 
                        <h4 className={styles.Detail}>{Item.detail_atribute}</h4>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default CvsectionjobsFree


