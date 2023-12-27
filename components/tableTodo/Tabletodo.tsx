import React, { ReactNode, useEffect, useRef, useState } from 'react'
import style from './BodyTable.module.css'

import { SearchOutlined } from '@ant-design/icons';

import Highlighter from 'react-highlight-words';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table, Pagination } from 'antd';
import type { ColumnType, ColumnsType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Buttonscrud from '../ButtonCRUD/Buttonscrud';
import Spinner from '../spinner/Spinner';


const Tabletodo = (props: any) => {

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);

    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);

        const selectedRowIds = newSelectedRowKeys.map(key => posts.find((post: any) => post.key === key).id);

        // Display the selected row IDs (e.g., in a console log or a message)
        console.log('Selected row IDs:', selectedRowIds);


        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;






    const [todo, setTodo] = useState()
    const [headers, setHeaders] = useState()
    const [posts, setPosts] = useState<any[] | undefined | any>([]);



    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);




    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: any,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: any): ColumnType<any> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });


    const columns: any[] = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            width: '10%',
            sorter: true,
            render: (id: any) => `${id.first} ${id.last}`,
            ...getColumnSearchProps('id'),

        },
        {
            title: 'title',
            dataIndex: 'title',
            key: 'title',
            width: '25%',
            sorter: true,
            render: (title: any) => `${title.first} ${title.last}`,
            ...getColumnSearchProps('title'),
        },
        {
            title: 'description_cv',
            dataIndex: 'description_cv',
            key: 'description_cv',
            width: '30%',
            ...getColumnSearchProps('description_cv'),
            sorter: (a: {
                description_cv: any; address: string | any[];
            }, b: {
                address: any; description_cv: string | any[];
            }) => a.description_cv.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },

        {
            title: 'Action',
            key: 'action',
            width: '60%',
            render: (_: any, record: {
                title: ReactNode; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined;
            }) => (
                <Buttonscrud todo={record} children={undefined} />
            ),
        },
    ];





    useEffect(() => {
        const {
            todos
        } = props
        let {
            Header,
            Columns
        } = todos
        setTodo(todos)
        setHeaders(Header)
        setPosts(Columns)

    }, [props])




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

