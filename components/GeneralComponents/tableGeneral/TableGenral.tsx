import React, { useState } from 'react';
import { Table, Collapse } from 'antd';

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
    } = props;

    const [expandedRowKey, setExpandedRowKey] = useState<React.Key | null>(null);

    const onExpand = (expanded: boolean, record: any) => {
        console.log("Expanding row with id:", record.id);
        setExpandedRowKey(expanded ? record.id : null);
    };

    const onChange:any = (activeKey: string[]) => {
        console.log("Active Key:", activeKey);
        // Actualiza el estado de la fila expandida
        setExpandedRowKey(activeKey[0]);
    };

    return (
        <div>
                <Table
                    columns={columns}
                    expandable={{
                        expandedRowRender: (record) => {
                            if (!record.id) {
                                return null;
                            }
                            return <p style={{ margin: 0 }}>{record.id}</p>;
                        },
                        rowExpandable: (record) => record.id !== 'Not Expandable',
                        expandedRowKeys: expandedRowKey ? [expandedRowKey] : [],
                        onExpand,
                    }}
                    dataSource={dataSource}
                    size="small"
                />
        </div>
    );
};
export default TableGenral;