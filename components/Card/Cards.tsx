import * as React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';


const { Meta } = Card;

const Cards = (props: any) => {
  return (

    <div {...props}>
      {props.children}
    </div>
  )
}

export default Cards
