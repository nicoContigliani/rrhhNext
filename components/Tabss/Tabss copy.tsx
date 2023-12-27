import React, { useEffect, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import style from '@/components/Tabss/tabss.module.css'

import DescriptionS from '../Descriptions/Descriptions';
import { SizeType } from 'antd/es/config-provider/SizeContext';

const Tabss = (props: any) => {
  const { todo } = props
  const { todo: { Sections } } = props
  const [data, setData] = useState()
  const [size, setSize] = useState<SizeType>('small');


  const [sectionsS, setSectionsS] = useState<any | any[] | undefined>()

  useEffect(() => {
    setData(todo)

  }, [props])
  useEffect(() => {
    const SectionsSync = async () => {
      if (Sections) {
        const dataR = await (Sections?.slice()?.reverse())
        await setSectionsS(dataR)
      }
    }
    SectionsSync()
  }, [props])



  const handleResize = () => {
    // Cambiar la posición de las pestañas a la parte superior en pantallas más pequeñas
    if (window.innerWidth <= 768) {
      setMode('left');
    } else {
      setMode('left');
    }
  };


  useEffect(() => {
    // Detectar el tamaño de la pantalla al cargar la página
    handleResize();

    // Agregar un listener para detectar cambios en el tamaño de la pantalla
    window.addEventListener('resize', handleResize);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window]);


  const items: TabsProps['items'] = [];

  // Concise conditional check for sectionsS
  if (sectionsS?.length) {
    sectionsS.forEach((item: { id: string | any; title: string | any; Items: any[] }) => {

      const reversedItems = [...item.Items].reverse();

      const toSend = {
        key: item.id,
        label: item.title,
        children: <DescriptionS todo={reversedItems} />,
      };
      items.push(toSend);
    });
  }

  const [mode, setMode] = useState<any>('left');


  const onChange = (key: string) => {
    console.log("🚀 ~ file: Tabss.tsx:37 ~ onChange ~ key:", key)
  };

  return (
    <div className={style.body}>

      {
        (sectionsS && sectionsS.length > 0) ?
          <Tabs
            className={style['si']}

            defaultActiveKey="1"
            
            tabPosition={mode}
            size={size}
            style={{ height: 420 }}
            items={items} onChange={onChange}
          /> : ""
      }

    </div>
  )
}

export default Tabss
