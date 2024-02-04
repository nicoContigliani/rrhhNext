import React, { useEffect, useState } from 'react'
import styles from './section.module.css'
const CvSectionDisponibility = (props: any) => {
  const { eduData, titleHeader } = props
  const [educationData, seEducationData] = useState<any[]>()
  useEffect(() => {
    seEducationData(eduData)
  }, [props])



  return (
    <div>

      <div className={styles.cvsection}>
        <h2 className={styles.sectionHeader}>{titleHeader}</h2>
        <section className={styles.List}>
          {educationData?.map((Item: any) => (
            <div key={Item.start} className={styles.Item}>
              <h3 className={styles.titlePrincipal}>{Item.title} <span className={styles.titleSecondary}>({Item.institute})</span>
              </h3>
              <span className={styles.TitlePeriod}> ({Item.start}/{Item.finish})</span>
            </div>
          ))}
        </section>
      </div>

    </div>
  )
}

export default CvSectionDisponibility
