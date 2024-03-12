import React, { useEffect, useState } from 'react';
import { Badge, Button, Input, Space, Table, Pagination } from 'antd';
import Spinner from '../../spinner/Spinner';
import InputsSertchGeneral from '../InputserchGeneral/InputsSertchGeneral';

interface ExpandedDataType {
    key: React.Key;
    date: string;
    name: string;
    upgradeNum: string;
}

const TableGenral = (props: any) => {
    const {
        columns,
        dataSource,
        pagination,
    } = props;
    const [columnsS, setColumnsS] = useState<any | any[]>()
    const [dataSourceS, setDataSourceS] = useState<any | any[]>()
    const [paginationS, setPaginationS] = useState<any | any[]>()
    const [headerColumns, setHeaderColumns] = useState<any | any[]>()
    const [dataFilter, setDataFilter] = useState<any | any[]>()
    const [dataTable, setDataTable] = useState<any[]>()


    useEffect(() => {
        const todo = async () => {
            if (columns) await setColumnsS(columns)
            if (dataSource) await setDataSourceS(dataSource)
            if (pagination) await setPaginationS(pagination)
            setHeaderColumns(columns?.map((item: any) => item.title))
        }
        todo()
    }, [props])


    useEffect(() => {
        const getDataForSend = async () => {
            // setDataTable(dataAll)
            console.log("🚀 ~ getDataForSend ~ dataFilter:", dataFilter)

            if (dataFilter?.length != 0 && dataFilter != undefined) {
                await setDataTable(dataFilter)
            }
            if (dataFilter?.length == 0 || dataFilter == undefined) {
                await setDataTable(dataSource)
            }
        }
        getDataForSend()

    }, [dataSourceS, dataFilter])




    return (
        <div>
            {
                dataSourceS ?
                    <div>
                        <InputsSertchGeneral
                            columnsS={columnsS}
                            dataSourceS={dataSourceS}
                            headerColumns={headerColumns}
                            setDataFilter={setDataFilter}
                        />
                        <Table
                            columns={columnsS}
                            pagination={{ pageSize: paginationS }} // Adjust the page size as needed
                            dataSource={dataTable}
                            size="small"
                            scroll={{ x: 200 }}
                            bordered

                        // expandable={{
                        //     expandedRowRender: (record) => {
                        //         if (!record.id) {
                        //             return null;
                        //         }
                        //         return <p style={{ margin: 0 }}>{record.id}</p>;
                        //     },
                        //     rowExpandable: (record) => record.id !== 'Not Expandable',
                        //     expandedRowKeys: expandedRowKey ? [expandedRowKey] : [],
                        //     onExpand,
                        // }}


                        />
                    </div>
                    : <Spinner />
            }
        </div>
    );
};
export default TableGenral;