import React, { useEffect, useState } from 'react'
import styles from './section.module.css'
const CVSectionhardskill = (props: any) => {
  const { data, titleHeader } = props
  const [dataProps, setDataprops] = useState<any[]>()
  useEffect(() => {
    setDataprops(data)
  }, [props])

  return (
    <div>



      <div className={styles.cvsection}>
        <h2 className={styles.sectionHeader}>{titleHeader}</h2>
        <section className={styles.List}>
          {dataProps?.map((Item: any) => (
            <div key={Item.values} className={styles.Item}>
              <li className={styles.Detail}>{Item},</li>
            </div>
          ))}
        </section>
      </div>




    </div>
  )
}

export default CVSectionhardskill
