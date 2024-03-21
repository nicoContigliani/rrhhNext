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




import { Home, Iconflama, certificado, cv, documentoLegal, rrhh, lupahuman, lupahumans, module, reporte, clienteS, panel, crud, compania,planing } from '../../services/iconsImportList.services'
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
      label: "Modules",
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
    },
    {
      module: "RRHH_TALENTS",
      label: "Companies",
      urls: compania,
      actions: "",
      routesLink: "/companies"
    },
    {
      module: "RRHH_TALENTS",
      label: "Road Maps",
      urls: planing,
      actions: "",
      routesLink: "/talents/resourceRoadMaps"
    },


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
        --crud Company <br />
        --tabla de seguimiento <br />
        --tabla de reclutado <br />
        -- post card para aplicar <br />

        Diagramas específicos para cada etapa:

        1. Recepción de CV:

        Inicio
        |
        | Recepción de CV
        |
        | Extracción de información
        |
        | Creación de registro en la tabla de candidatos
        |
        Fin
        2. Análisis del CV:

        Inicio
        |
        | Análisis del CV
        |
        | Comparación de palabras clave
        |
        | Extracción de entidades
        |
        | Análisis de sentimiento
        |
        | Almacenamiento del resultado en la tabla de candidatos
        |
        Fin
        3. Selección de candidatos:

        Inicio
        |
        | Consulta de la tabla de candidatos
        |
        | Filtrado por requisitos del puesto
        |
        | Selección de candidatos
        |
        | Marcado como "en revisión" en la tabla de candidatos
        |
        Fin
        4. Entrevista:

        Inicio
        |
        | Consulta de la tabla de candidatos
        |
        | Programación de la entrevista
        |
        | Registro de la información en la tabla de entrevistas
        |
        | Realización de la entrevista
        |
        | Evaluación del candidato
        |
        Fin
        5. Evaluación:

        Inicio
        |
        | Consulta de la tabla de entrevistas
        |
        | Cálculo de la evaluación
        |
        | Registro de la evaluación en la tabla de evaluaciones
        |
        Fin
        6. Decisión:

        Inicio
        |
        | Consulta de la tabla de evaluaciones
        |
        | Toma de decisión final
        |
        | Registro de la decisión en la tabla de decisiones
        |
        | Comunicación de la decisión al candidato
        |
        Fin

        <br />
        <hr />

        Carga inicial de las tablas:
        Tabla "Vacante":

        Cargar las vacantes disponibles en la empresa.
        Tabla "Usuario":

        Cargar los usuarios que realizarán las entrevistas.
        Tabla "Entrevista":

        Cargar las entrevistas ya realizadas (si las hay).
        Tabla "EntrevistaVacante":

        Cargar la relación entre las entrevistas y las vacantes (si las hay).
        Tabla "Candidato":

        Cargar los candidatos que ya han sido entrevistados (si los hay).
        Tabla "ProcesoSeleccion":

        Cargar los procesos de selección en curso (si los hay).




      </div>
    </div>
  )
}

export default Page
