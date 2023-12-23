import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Tabs } from 'antd';

const Tabss = () => {
    const [mode, setMode] = useState<any>('left');

  return (
    <div>
       <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        style={{ height: 220 }}
        items={new Array(30).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label: `Tab-${id}`,
            key: id,
            disabled: i === 28,
            children: `Content of tab ${id}`,
          };
        })}
      />
    </div>
  )
}

export default Tabss
