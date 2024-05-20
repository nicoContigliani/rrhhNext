import React, { useEffect, useState } from 'react'
import todo from '@/diccionaryRoutes/diccionaryRoutes.json'



const useBeforeComponentCrud = (props: any) => {
    const { worddatafind, data, setData, dataSelectStatus, setDataSelectStatus } = props
    const [dataJson, setDataJson] = useState<any | any[] | undefined>(todo)
    const [dataSelect, setDataSelect] = useState<any | any[] | undefined>()


    useEffect(() => {

        const todoFilter = async () => {
            // setDataJson(todo)
            if (dataJson !== undefined) console.log("🚀 ~ todoFilter ~ todo:", todo)
        }
        todoFilter()

    }, [todo, worddatafind])



    return {

    }
}

export default useBeforeComponentCrud
