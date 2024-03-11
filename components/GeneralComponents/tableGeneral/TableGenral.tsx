import React, { useEffect, useState } from 'react';
import { Badge, Button, Input, Space, Table, Pagination } from 'antd';

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
        pagination
    } = props;
    const [columnsS, setColumnsS] = useState<any | any[]>()
    const [dataSourceS, setDataSourceS] = useState<any | any[]>()
    const [paginationS, setPaginationS] = useState<any | any[]>()
    useEffect(() => {
        const todo = async () => {
            if (columns) await setColumnsS(columns)
            if (dataSource) await setDataSourceS(dataSource)
            if (pagination) await setPaginationS(pagination)
        }
        todo()
    }, [props])

    
    console.log("🚀 ~ TableGenral ~ dataSourceS:", dataSourceS)

    return (
        <div>
            <Table
                columns={columnsS}
                pagination={{ pageSize: paginationS }} // Adjust the page size as needed
                dataSource={dataSourceS}
                size="small"
                scroll={{ x: 200 }}

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
    );
};
export default TableGenral;