import React, { useEffect, useState } from 'react'

import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';



const Stadistic = (props: any) => {
      const [data, setData] = useState<any | any[] | undefined>(props)
    useEffect(() => {
        if (props.length > 0 || props !== undefined) setData(props)
    }, [props])
console.log("🚀 ~ file: Stadistic.tsx:11 ~ Stadistic ~ data:", data)

    return (
        <div>
            <Card bordered={true}>
                <Statistic
                    // title="Active"
                    // value={11.28}
                    // precision={2}
                    // valueStyle={{ color: '#3f8600' }}
                    // // prefix={<ArrowUpOutlined />}
                    // suffix="%"
                    {...data}
                />
            </Card>

        </div>
    )
}

export default Stadistic
