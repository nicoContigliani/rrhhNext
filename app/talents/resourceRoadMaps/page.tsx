"use client"

import React, { useEffect, useLayoutEffect, useMemo, useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import styles from "./page.module.css"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { rootsAsync, selectRoots } from '@/redux/features/roots/rootsSlice'
import { preloadRoadMapsData, selectRoadMap } from '@/redux/features/RoadMaps/roadmapsSlice'
import { formatDataAllElementNotArray } from '@/services/formaterDataArrayAll'
import { Table } from 'antd'
import { formaterDataArray } from '@/services/formaterDataArray'
import { reaactLocalStoraSimple, reaactLocalStoraSimpleAnyAsync } from '@/services/storage.services'

const ButonGeneralModal = dynamic(() => import('@/components/GeneralComponents/CRUDGeneral/ButonGeneralModal/ButonGeneralModal'), { ssr: false })
const Spinner = dynamic(() => import('@/components/spinner/Spinner'), { ssr: false })


const Page = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(rootsAsync());
    dispatch(preloadRoadMapsData());
  }, [dispatch]);

  const roots = useAppSelector(selectRoots);
  const { col_structure } = roots;
  const { dataGetRoadMap } = useAppSelector(selectRoadMap);

  const [flatColumn, setflatColumn] = useState<any | any[]>();

  const [colStart, setColStart] = useState<any | any[]>();
  const [data1, setData1] = useState<any | any[] | undefined>();
  const [col1, setCol1] = useState<any | any[]>();

  const [columnSelectElement, setColumnSelectElement] = useState<any | any[] | undefined>(
    reaactLocalStoraSimpleAnyAsync("RoadMaps") || ["updatedAt", "createdAt", "order_Steps"]
  );




  const columnsAfterFiltered = useMemo(() => {
    if (Array.isArray(col_structure)) {
      const tableStructure = col_structure.find((obj: any) => obj.table_fullname === "RoadMaps");
      const columnNames = tableStructure?.table_columns?.map((column: any) => column?.column_name) ?? [];
      const flatColumnSelectElement = columnSelectElement?.flat();
      return columnNames?.filter((colItem: any) => flatColumnSelectElement?.includes && !flatColumnSelectElement.includes(colItem));
    }
    return [];
  }, [col_structure, columnSelectElement, columnSelectElement]);




  const columnsAfterFilteredMemo2 = useMemo(() => {
    if (Array.isArray(col_structure)) {
      const tableStructure = col_structure.find((obj: any) => obj.table_fullname === "RoadMaps");
      return tableStructure?.table_columns?.map((column: any) => column?.column_name) ?? [];

    }
    return [];
  }, [col_structure, columnSelectElement]);

  useEffect(() => {
    setflatColumn(columnsAfterFilteredMemo2);
  }, [col_structure, columnSelectElement])


  const formatData = useCallback(async () => {
    try {
      if (dataGetRoadMap.length > 0 && colStart) {
        const dataReturns = await formatDataAllElementNotArray(dataGetRoadMap, [], colStart);
        setData1(dataReturns);
      }
    } catch (error) {
      console.log("🚀 ~ formatData ~ error:", error);
    }
  }, [dataGetRoadMap, colStart]);

  useLayoutEffect(() => {
    formatData();
  }, [formatData]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        setColStart(columnsAfterFiltered);

        if (columnsAfterFiltered.length > 0) {
          const todos = await formaterDataArray(columnsAfterFiltered, "Roadmap");
          const todosS = [...todos,
          {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            width: 100,
            render: (text: any, record: any) => (
              <div>
                <ButonGeneralModal
                  todo={record}
                  ids={record.id}
                  creates={false}
                  updates={true}
                  deletes={true}
                  shows={true}
                  settings={false}
                  pathStart="/RoadMap/RoadMap/"
                  nameModelStart="RoadMaps"




                  
                />
              </div>
            ),
          }
          ];
          setCol1(todosS);
        }
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      }
    };
    fetchData();
  }, [columnsAfterFiltered]);






  return (
    <div className={styles.body}>

      <div className={styles.siderTop} >
        <ButonGeneralModal
          todo={data1}
          ids="0"
          creates={true}
          // createData={createDataStart}
          updates={false}
          deletes={false}
          shows={false}
          settings={true}

          settingData={flatColumn}
          columnSelectElement={columnSelectElement}
          setColumnSelectElement={setColumnSelectElement}

          // datas={data}
          pathStart="/RoadMap/RoadMap/"
          nameModelStart="RoadMaps"
        >

        </ButonGeneralModal>
      </div>



      {colStart && data1 ? (
        <div className={styles.tables}>

          <Table
            dataSource={data1}
            columns={col1}
            bordered
            scroll={{ x: 'auto' }}
            style={{ minWidth: '360px' }}
            expandable={{
              rowExpandable: (record) => true,
              expandedRowRender: (record) => {
                return <div>{record.id}</div>;
              }
            }}
          />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Page;
