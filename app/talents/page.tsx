"use client"

import React, { useState } from 'react'
import style from './Talent.module.css'

import { authAsync, selectAuth } from '@/redux/features/auth/authSlice'
import { readLocalStorage } from '@/services/storage.services';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';


import { Button, Drawer, Radio, Space } from 'antd';
import type { DrawerProps } from 'antd/es/drawer';
import type { RadioChangeEvent } from 'antd/es/radio';

import dynamic from 'next/dynamic';

import Iconf from '@/components/images/flama.png'
import Menus from '@/components/images/menu.png'




import { Home, Iconflama, certificado, cv, documentoLegal, rrhh, lupahuman, lupahumans, module, reporte, clienteS, panel,crud } from '../../services/iconsImportList.services'
import Siderbox from '@/components/siderbarBox/Siderbox';
import Icons from '@/components/Icons/Icons';





const Page = () => {

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

  const showDrawer = () => {
    setOpen(true);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setOpen(false);
  };

  const todo = [
    {
      module: "RRHH_TALENTS",
      label: "Resource Management",
      urls: crud,
      actions: "",
      routesLink: "/talents/resourceManagement"
    },

    {
      module: "RRHH_TALENTS",
      label: "Table Resources",
      urls: rrhh,
      actions: "",
      routesLink: "/humansrresources"
    },

    {
      module: "RRHH_TALENTS",
      label: "Table Recruiters",
      urls: lupahuman,
      actions: "",
      routesLink: "/talents"
    },
    {
      module: "RRHH_TALENTS",
      label: "Post",
      urls: cv,
      actions: "",
      routesLink: "/curriculum"
    }

  ]






  return (
    <div className={style.body}>
      <div className={style.siderbar}>
        <Siderbox todo={todo} />

      </div>
      <div className={style.todo}>
        hola estoy en talent<br />

        -navbar para <br />
        --crud necesidad de recurso <br />
        --tabla de seguimiento <br />
        --tabla de reclutado <br />
        -- post card para aplicar <br />

      </div>
    </div>
  )
}

export default Page
