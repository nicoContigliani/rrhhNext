'use client';

import dynamic from 'next/dynamic';

import { preloadAuthData } from '@/redux/features/auth/authSlice';
import { RootState } from '@/redux/store';
import { readLocalStorage } from '@/services/storage.services';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import dataPemissionRoutes from '@/app/dataPermissionRoutes.json';
import useRoutesPermission from '@/hooks/useRoutesPermission';


import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// const useRoutesPermission = dynamic(() => import('@/hooks/useRoutesPermission'), { ssr: false })


interface ProtectedRouteProps {
    children: React.ReactNode;
}
export interface UserStorage {
    islogin: boolean;
    user: {
        admins: string
    };
    token: string;
    id: number | string | null
}
// export interface user extends UserStorage {
//   admins:string
// }



const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [todo, setTodo] = useState<any>({ id: 1, isLogin: false })
    const [authData, setAutData] = useState()
    const dispatch = useDispatch();
    const router = useRouter();
    const auth: any = useSelector((state: RootState) => state.auth);
    const pathname: any = usePathname();


    const dataSearch: any[] = [
        "islogin",
        "token",
        "id",
        "email",
        "fullname",
        "phone",
        "birthday",
        "Score",
        "status_user",
        "name_role",
        "name_permission",
        "conditions",
        "code",
        "creates",
        "reads",
        "updates",
        "deletes",
        "admins",
        "exports",
        "imports",
        "approve",
        "generate_reports",
        "configure",
        "restrict",
        "manage_users",
        "manage_roles",
        "audit",
        "name_branch",
        "branch_long",
        "branch_lat",
        "branch_score",
        "company",
        "companyPhone",
        "companyEmail",
        "urlCompany",
        "status_company",
        "shift_name",
        "start_time",
        "end_time",
        "status_shift"
    ]

    useLayoutEffect(() => {
        const todoR = async () => {
            const data = await readLocalStorage(dataSearch)
            if (!data?.islogin) router.push('/')
            setAutData(data)
        }
        todoR()
    }, [auth])

    useLayoutEffect(() => {
        if (!auth.islogin) dispatch(preloadAuthData());
    }, [dispatch]);




    useLayoutEffect(() => {
        let statusRouterReturn = useRoutesPermission(dataPemissionRoutes, authData, pathname)

    }, [pathname])


    useEffect(() => {

    }, [])



    //   const dataSerch: any[] = ["token", "islogin", "user", "id"]
    //   // const dataR = await readLocalStorage(dataSerch)

    //   useEffect(() => {
    //     dispatch(preloadAuthData());
    //   }, [dispatch]);



    //   useEffect(() => {

    //     const todoR = async () => {
    //       const data = await readLocalStorage(dataSerch)
    //       if (!data?.isLogin) router.push('/')
    //       setTodo(data)
    //     }
    //     todoR()

    //   }, [auth])




    //   useEffect(() => {
    //     const { user: { routes: userRoutes }, admin: { routes: adminRoutes }, employes: { routes: employesRoutes } } = dataPemissionRoutes || {};

    //     // if(true) router.push('/')
    //     const statusRouter = () => {
    //       const statusRouterReturn: any = routesPermission(dataPemissionRoutes, todo, pathname)
    //       console.log("🚀 ~ file: ProtectedRoutes.tsx:75 ~ statusRouter ~ statusRouterReturn:", statusRouterReturn)

    //       if (statusRouterReturn) router.push('/')
    //     }
    //     statusRouter()
    //   }, [pathname])


    //   interface PostEvent {
    //     datas: any;
    //   }

    //   const [datas, setDatas] = useState([]);

    //   const endpoint = '/si';
    //   //api sub token
    //   useEffect(() => {

    //     const todoR = async () => {

    //     }
    //     todoR()

    //   }, [])


    return <>
        <div>
            {(authData) ? children :
                <div>
                    <Skeleton circle={true} height={50} width={50} />
                    <Skeleton count={10} />
                    <br />
                    <Skeleton count={10} />
                </div>
            }

        </div>
    </>;
};

export default ProtectedRoutes;



