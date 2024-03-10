import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCrud } from '@/redux/features/CRUD/crudSlice';
import isEqual from 'lodash/isEqual';

const useFetchCrudData = (todoCRUD: any | any[] | undefined) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any | any[]>([]);
    const [message, setMessage] = useState<string | null | undefined>('');
    const [httpStatus, setHttpStatus] = useState<any | any[]>(null);

    const memoizedTodoCRUD = useMemo(() => todoCRUD, [todoCRUD]); // Memoize todoCRUD

    const mountedRef = useRef(false);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const actionResult = await dispatch(fetchCrud(memoizedTodoCRUD));
                const responseData = actionResult.payload.data;
                setData(responseData);
                setMessage('Datos obtenidos con éxito');
                setHttpStatus(null);
            } catch (error) {
                console.error('Error al obtener datos:', error);
                setMessage('Error al obtener datos');
                setHttpStatus(500);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [dispatch]); // Use memoizedTodoCRUD in dependency array

    const refetchData = async () => {
        // Trigger a new fetch only if the component is mounted
        if (mountedRef.current) {
            try {
                const actionResult = await dispatch(fetchCrud(todoCRUD));
                const responseData = actionResult.payload.data;
                setData(responseData);
                setMessage('Datos actualizados con éxito');
                setHttpStatus(null);
            } catch (error: any) {
                console.error('Error al actualizar datos:', error);
                setMessage('Error al actualizar datos');
                setHttpStatus(error.status || 500); // Update HTTP status with error status
            }
        }
    };


    console.log("🚀 ~ useFetchCrudData ~ data:", data)

    return { loading, data, message, httpStatus,refetchData };
};

export default useFetchCrudData;