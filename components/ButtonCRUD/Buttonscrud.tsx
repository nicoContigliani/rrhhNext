import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from './button.module.css'
import { Icon } from '@mui/material'
import { Add, Remove, Search } from '@mui/icons-material'
import Show from './buttonSerchCRUD/Shows/Show';
import Adds from './buttonSerchCRUD/Adds/Adds';
import Updates from './buttonSerchCRUD/Updates/Updates';
import Deletes from './buttonSerchCRUD/Deletes/Deletes';
import { RootState } from '@/redux/store';
import { createCrud, fetchCrud, updateCrud } from '@/redux/features/CRUD/crudSlice';
import { deleteCrud } from '@/redux/features/CRUD/crudSlice';
import { sortSectionTypeId } from '@/services/sortSectionTypeId.services';
import { sectionsFormatForModal } from '@/services/sectionsFormatForModalservices';

export interface FetchCrudData {
    urlGeneral: string | any;
    methods: string;
    body?: any | any[]; // Tipo específico para el cuerpo de la solicitud
    idParams?: string;
}




const Buttonscrud = ({ urlGeneral, todo }: { urlGeneral: string | undefined, todo: any }) => {
    console.log("🚀 ~ Buttonscrud ~ todo:", todo)


    const [data, setData] = useState<any | any[]>()
    const [sectionsData, setSectionsData] = useState<any | undefined>()
    useEffect(() => {

    }, [todo])

    useEffect(() => {
        const dataGetReturn = async () => {
            const { dataReturn, sections } = await sortSectionTypeId(todo)
            const dataSections = await sectionsFormatForModal(sections)
            await setSectionsData(dataSections)
            await setData(dataReturn)
        }
        dataGetReturn()
    }, [todo])



    const [pathNow, setPathNow] = useState<any>()
    const [methods, setMethods] = useState<any>()
    const [dataInformation, setDataInformation] = useState<any | any[]>()




    const dispatch = useDispatch();
    const dataCrud: any | any[] | undefined = useSelector((state: RootState) => state.crud?.dataCrud);
    const loading = useSelector((state: RootState) => state.crud.loading);
    const message = useSelector((state: RootState) => state.crud.message);
    const httpStatus = useSelector((state: RootState) => state.crud.httpStatus);


    // useEffect(() => {
    //     dispatch(fetchCrud(urlGeneral)); // Se carga los datos al montar el componente
    // }, [dispatch]);

    const handleCreate = () => {
        const todoCRUD: FetchCrudData = {
            urlGeneral: urlGeneral,
            methods: 'GET',
            body: "",
            idParams: "",
        }
        dispatch(createCrud(todoCRUD));
    };

    // const handleUpdate = (id: number) => {
    //     dispatch(updateCrud({ id, /* otros datos para actualizar */ }));
    // };

    const handleDelete = () => {
        console.log("🚀 ~ Buttonscrud ~ dataDelete:", data)



        const todoCRUD: any | undefined = {
            urlGeneral,
            methods: 'DELETE',
            body: data,
            idParams: data.id,
        }
        dispatch(deleteCrud(todoCRUD))

    };
    const handleGet = () => {
        const todoCRUD = {
            urlGeneral,
            methods: 'GET',
            body: "",
            idParams: "",
        }

        dispatch(fetchCrud(todoCRUD))
    };




    const handleUpdate = () => {
        console.log("si anda el metodo")

        const todoCRUD = {
            urlGeneral,
            methods: 'GET',
            body: "",
            idParams: "",
        }
        dispatch(fetchCrud(todoCRUD))
    }










    return (
        <div className={style.body}>

            {
                (sectionsData?.length !== 0) ? <Show

                    handleAction={handleGet}
                    todo={sectionsData} /> : ""

            }
            {
                (sectionsData?.length !== 0) ? <Adds

                    handleAction={handleCreate}
                    todo={sectionsData} /> : ""

            }
            {
                (sectionsData?.length !== 0) ? <Updates

                    handleAction={handleUpdate}
                    todo={sectionsData} /> : ""

            }
            {
                (sectionsData?.length !== 0) ? <Deletes

                    handleAction={handleDelete}
                    todo={sectionsData} /> : ""

            }
        </div>
    )
}

export default Buttonscrud
