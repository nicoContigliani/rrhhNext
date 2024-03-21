"use client"



import { IFetchCrudData } from '@/app/Interfaces/IFetchCrudData'
import Typeselectcrud from '@/components/GeneralComponents/TypeSelectCRUD/Typeselectcrud'
import useFetchCrudData from '@/hooks/useFetchCrudData'
import { dataFormaterToSelect } from '@/services/dataFormaterToSelect.services'
import React, { useEffect, useState } from 'react'


const page = () => {

  const [sources, setSources] = useState<any | any[]>()
  const [objectKeys, setObjectKeys] = useState<any | any[]>()


  //crud typeGeneral
  //Get
  const todoCRUDGet: IFetchCrudData = {
    urlGeneral: "/TypeVacancy/TypeVacancy/",
    methods: 'GET',
    body: "",
    idParams: "",
  }
  const { loading, datas, message, httpStatus, refetchData } = useFetchCrudData(todoCRUDGet); // Usa el hook personalizado
  const datakey = ['id', 'name_vacancy_type']
  useEffect(() => {
    const todo = () => {
      try {
        const dataResult: any | any[] | undefined = dataFormaterToSelect(datakey, datas)
        setSources(dataResult)
      } catch (error) {
      }

      try {
        const dataKeyGeneral = Object.keys(datas[0])
        if (dataKeyGeneral !== undefined ) setObjectKeys(dataKeyGeneral)
          console.log("🚀 ~ todo ~ dataKeyGeneral:", dataKeyGeneral)
      } catch (error) {

      }


    }
    todo()
  }, [datas])


  return (
    <div>


      <Typeselectcrud
        placeholder="Select"
        datas={datas}
        sources={sources}
        todo=""
        MAX_COUNT={1}
        datakey={datakey}
        objectKeys={objectKeys}



      />
      RoadMaps
    </div>
  )
}

export default page
