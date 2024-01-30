import { useEffect, useState } from "react"

const routerLocationServices = (props: any) => {

    const tods = () => {

    }


    console.log("🚀 ~ routerLocationServices ~ props:", props)
    const [data, setData] = useState()
    useEffect(() => {
        setData(props)
    }, [props])

    return { data }
}

export default routerLocationServices