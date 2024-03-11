import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { fetchCrud, fetchCrudId } from '@/redux/features/CRUD/crudSlice';
import isEqual from 'lodash/isEqual';

const ShowGeneral = (props: any) => {
    const dispatch = useDispatch();



    const {
        id,
        todoCRUD,
        gridFormatView,
        setGridFormatView,
        children,
        dataInfo,
        loading,
        data,
        message,
        httpStatus,

    } = props;



    return (
        <div>
            {loading && <p>Cargando...</p>}
            {message && <p>{message}</p>}
            {httpStatus && <p>{httpStatus}</p>}
            {!loading && dataInfo.length > 0 && (
                <div>
                    {dataInfo.map((item: any) => (
                        <div key={item.id}>{item.name}</div>
                    ))}
                </div>
            )}

            {gridFormatView ? children : "no"}
        </div>
    );
};

export default ShowGeneral;