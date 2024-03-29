"use client"
/* eslint-disable react-hooks/exhaustive-deps */

import Image from 'next/image'
import styles from './page.module.css'

import dynamic from 'next/dynamic'

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { authAsync, selectAuth } from '@/redux/features/auth/authSlice'
import { readLocalStorage } from '@/services/storage.services';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import Auths from '@/components/Auth/Auth';
import Icons from '@/components/Icons/Icons';
import Main from '@/components/Main/Main';
import Iconf from '@/components/images/flama.png'
import Presentation from '@/components/Presentation/Presentation';
import { selectModuleServices } from '@/redux/features/modulesServices/moduleServicesSlice';

const Logo = dynamic(() => import('@/components/Logo/Logo'), { ssr: false })



export default function Home() {
  const [data, setData] = useState({})

  const dispatch = useAppDispatch();

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



  const [isLogins, setIsLogins] = useState(false)
  const auth = useAppSelector(selectAuth);
  // preloadModuleServices

  useEffect(() => {
    const todoR = async () => {
      const datas = await readLocalStorage(dataSearch);
      if (datas && datas.islogin) { // Asegúrate de verificar correctamente la propiedad
        setIsLogins(true);
      } else {
        setIsLogins(false);
      }
    };

    todoR();
  }, [auth]);


  const getModulesServices: any | any[] = useAppSelector(selectModuleServices);






  const onAction = async () => {
    // alert("si")
    dispatch(authAsync(data))
  }

  return (
    <main className={styles.main}>
      {
        isLogins ?
          <div>
            <div className={styles.element} >
              <Presentation />
            </div>
          </div>
          :
          <div className={styles.start}>

            <div className={styles.element} >
              <div className={styles.logocenter} >
                <Icons
                  src={Iconf} alt={''}
                  className={styles.logo}
                />
                <div className={styles.textTitle}>
                  <Main />
                </div>
              </div>

              <div className={styles.auth}>
                <Auths />
              </div>
            </div>
          </div>
      }


    </main>
  )
}
