import React, { ReactNode, useEffect, useRef, useState } from 'react'
import style from './BodyTable.module.css'

import { SearchOutlined } from '@ant-design/icons';

import Highlighter from 'react-highlight-words';
import type { InputRef } from 'antd';
import { Badge, Button, Input, Space, Table, Pagination } from 'antd';
import type { ColumnType, ColumnsType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Buttonscrud from '../ButtonCRUD/Buttonscrud';
import Spinner from '../spinner/Spinner';
import useTableSearch from '@/hooks/useTableSearch';


const Tabletodo = (props: any) => {
    const [urlGeneral, setUrlGeneral] = useState<string | undefined>()
    const { generalURL } = props
    useEffect(() => {
        setUrlGeneral(generalURL)
    }, [props])

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);

    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };


    const [todo, setTodo] = useState()
    const [headers, setHeaders] = useState<any | any[]>()
    const [posts, setPosts] = useState<any[] | undefined | any>([]);




    useEffect(() => {
        const getDataAync = async () => {
            if (props.todos !== undefined) {
                const {
                    todos,
                    action,
                    setAction,
                    dataAction,
                    setDataAction,
                    handleClickAction
                } = props
                let {
                    Header,
                    Columns
                } = todos

                setTodo(todos)
                setHeaders(Header)
                setPosts(Columns)
            }
        }
        getDataAync()

    }, [props, props.todos === undefined])

    const getColumnSearchProps = useTableSearch(todo)


    let columns: any = headers?.map((item: any) => {

        return {
            title: `${item}`,
            dataIndex: `${item}`,
            key: `${item}`,
            width: '10%',

            // render: `${item.first} ${item.last}`,
            ...getColumnSearchProps(`${item}`),
        }


    })

    columns = columns?.concat({
        title: 'Action',
        key: 'action',
        width: '5%',
        render: (_: any, record: {
            title: ReactNode;
            name: any | undefined;
        }) => (
            <Buttonscrud urlGeneral={urlGeneral} todo={record}>
                hola
            </Buttonscrud>


        ),
    });

    return (

        <div className={style.body}>
            {
                (posts?.length !== 0) ?
                    <Table
                        columns={columns}
                        dataSource={posts}
                        pagination={{ pageSize: 2 }} // Adjust the page size as needed
                        size="small"
                        bordered

                        // expandable={{
                        //     expandedRowRender: (record) => <p style={{ margin: 3 }}>{record.title}</p>,
                        //     rowExpandable: (record) => record.name !== 'Not Expandable',
                        // }}

                        //   <Modals todo={record} />

                        // rowSelection={rowSelection}
                        // scroll={{ x: 1500, y: 300 }}
                        scroll={{ x: 200 }}
                    // rowClassName="editable-row"
                    />
                    : <Spinner />
            }


        </div>
    )
}

export default Tabletodo

