/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from 'react'
import useScreenSize from './useScreenSize'

const useColumns = () => {

    const [datas, setDatas]: any[] | undefined = useState() //data General 
    const [dataDeleteColumns, setDataDeleteColumns] = useState() //data for delete
    const [dataDimention, setDataDimention] = useState()//retorna windows 
    const [headerColumnsAll, setHeaderColumnsAll] = useState() //all columns
    const [headerColumns, setHeaderColumns] = useState() //less columns
    const [dataReturn, setDataReturns] = useState([])
    const [todo, setTodo]: any[] | undefined = useState([])

    const { width, height } = useScreenSize()

    useEffect(() => {

        if (width > 490 && height > 300) {
            setDataReturns(datas)
        }
        if (width > height) {
            setDataReturns(datas)
        }

        if (width < 490) {
            let data: any = dataDeleteColumns
            let cvDataR: any[] | undefined = datas

            const todo = async () => {
                if (cvDataR === undefined) console.log("undefined")

                if (cvDataR !== undefined) {
                    try {
                        const newData: any = cvDataR?.map((item: any) => {
                            // Filtrar las propiedades basadas en el array 'data'
                            const newItem: any = Object.keys(item)
                                .filter(key => !data.includes(key))
                                .reduce((acc: any, key) => {
                                    acc[key] = item[key]
                                    return acc
                                }, {})
                            return newItem
                        });
                        setDataReturns(newData)
                        return newData
                    } catch (error) {
                        console.log("🚀 ~ file: cleanColumn.services.ts:25 ~ cleanColumns ~ error:", error)

                    }
                }
            }
            todo()
        }

    }, [width, height, datas])


    useEffect(() => {
        const headArray: any = (width > 490 && height > 300) ? headerColumnsAll : headerColumns

        const todos: any = {
            Header: headArray,
            ColumnsAll: datas,
            Columns: dataReturn
        }

        setTodo(todos)
    }, [width, height,datas])


    return { datas, setDatas,
             dataDeleteColumns, setDataDeleteColumns, 
             dataDimention, setDataDimention, 
             headerColumnsAll, setHeaderColumnsAll, 
             headerColumns, setHeaderColumns, 
             todo, setTodo
     }
}

export default useColumns
