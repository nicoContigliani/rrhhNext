import React, { useEffect, useState } from 'react'
import style from './BodyTable.module.css'
import Buttonscrud from '@/components/ButtonCRUD/Buttonscrud'
import Spinner from '@/components/spinner/Spinner'
const Post = (props: any) => {
    const [todo, setTodo] = useState<any | any[] | undefined>()
    const [posts, setPost] = useState<any | any[] | undefined>()
    const [loadingS, setLoadingS] = useState<any | any[] | undefined>()
    const [header, setHeader] = useState<any | any[] | undefined>()

    useEffect(() => {
        const {
            posts,
            loading,
            header
        } = props
        setLoadingS(loading)
        setPost(posts)
        setHeader(header)
    }, [props])


    useEffect(() => {
        const processColumns = async () => {
            if (!posts) {

                return;
            }

            const processedData = await posts.reduce(
                (acc: any, column: any) => {
                    const filteredKeys = Object.keys(column).filter((key) => header?.includes(key));
                    acc.push(filteredKeys.map((key) => column[key]));
                    return acc;
                },
                []
            );

            // Do something with processedData
            setTodo(processedData);
        };

        processColumns();
    }, [props])





    return (
        <div className={style.body}>
            <div className={style.todo}>
                <table className="table  subcompact cell-border  row-border  striped ">

                    <thead>
                        <tr className={style.tr}>
                            {header?.map((item: any, key: any) => (
                                <th key={key}>{item}</th>
                            ))}
                            <th>action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {posts && todo ? (
                            todo?.map((item: any[] | undefined, key: number) => (
                                <React.Fragment key={key}>
                                    <tr className={style.table}>
                                        {item?.map((cellValue: any, cellKey: number) => (
                                            <td>

                                                {typeof cellValue === 'boolean' ? (cellValue ? 'Active' : 'NotActive') : cellValue}
                                            </td>
                                        ))}
                                        <td>
                                            <Buttonscrud
                                                todo={todo}
                                                key={key}
                                            >
                                                hola
                                            </Buttonscrud>

                                        </td>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))
                        ) : (
                            <Spinner />
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Post
