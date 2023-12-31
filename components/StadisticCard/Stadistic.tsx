import React, { useEffect, useState } from 'react'

import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';



const Stadistic = (props: any) => {
    const { todo } = props
    const [data, setData] = useState<any | any[] | undefined>(todo)
    useEffect(() => {
        setData(todo)
    }, [props])

    return (
        <div>
            <Row gutter={16}>
                <Col span={10}>
                    <Card bordered={false}>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            // prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card bordered={false}>
                        <Statistic
                            title="Idle"
                            value={19.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            // prefix={<ArrowDownOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Stadistic
