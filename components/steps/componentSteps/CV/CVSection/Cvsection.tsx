import React, { useEffect, useState } from 'react'

const Cvsection = (props:any) => {
  const { data,titleHeader } = props
  const [dataProps, setDataprops] = useState<any[]>()
  useEffect(() => {
    setDataprops(data)
  }, [props])
  console.log("🚀 ~ Cvsection ~ dataProps:", dataProps)
  return (
    <div>
         partes del cv
    </div>
  )
}

export default Cvsection
