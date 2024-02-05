import React, { useEffect, useState } from 'react'
import styles from './section.module.css'
const CVSectionHeader = (props: any) => { // Fixed destructuring
    const { perInfData, children } = props
    const [dataPerson, setDataPerson] = useState<any[]>();

    useEffect(() => {
        setDataPerson(perInfData);
    }, [perInfData]); // Dependency array should include only perInfData


    return (
        <div>




            <header className={styles.cvsection}>
                {
                    dataPerson?.map((item: any) => (
                        <div key={item.fullname}>
                            <section className={styles.List}>
                                <h1 className={styles.sectionHeader}>{item.fullname}</h1>
                                {children}
                                <div>
                                    {
                                        (item?.email) ? (<li className={styles.Item}>{item?.email}</li>
                                        ) : ""
                                    }
                                    {
                                        (item?.phone) ? (<li className={styles.Item}>{item?.phone}</li>
                                        ) : ""
                                    }
                                    {
                                        (item?.birthsday) ? (<li className={styles.Item}>{item?.birthsday}</li>
                                        ) : ""
                                    }
                                    {
                                        (item?.linkedin) ? (<li className={styles.Item}>{item?.linkedin}</li>
                                        ) : ""
                                    }
                                    {
                                        (item?.repository) ? (<li className={styles.Item}>{item?.repository}</li>
                                        ) : ""
                                    }
                                    {
                                        (item?.folderprofile) ? (<li className={styles.Item}>{item?.folderprofile}</li>
                                        ) : ""
                                    }
                                </div>
                            </section>
                        </div>
                    ))
                }
            </header>
        </div>
    )
}

export default CVSectionHeader
