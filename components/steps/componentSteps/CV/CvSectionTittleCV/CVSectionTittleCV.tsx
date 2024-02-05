import React, { useEffect, useState } from 'react'
import styles from './section.module.css'

const CVSectionTittleCV = (props: any) => {
  console.log("🚀 ~ CVSectionTittleCV ~ props:", props)
  const { data, titleHeader } = props
  const [dataProps, setDataprops] = useState<any[]>()
  console.log("🚀 ~ CVSectionTittleCV ~ dataProps:", dataProps)
  useEffect(() => {
    setDataprops(data)
  }, [props])

  return (
    <div>
      <div className={styles.cvsection}>
        <section className={styles.List}>
          {dataProps?.map((Item: any) => (
            <div key={Item.values} className={styles.Item}>
              <h2 className={styles.sectionHeader}>{Item}</h2>
              {/* <li className={styles.Detail}>{Item}, </li> */}
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default CVSectionTittleCV
