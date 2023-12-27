import React, { useEffect, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import style from '@/components/Tabss/tabss.module.css'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Tabss = (props: any) => {

  const [value, setValue] = React.useState(0);

  const { todo } = props
  const { todo: { Sections } } = props
  const [data, setData] = useState()


  const [sectionsS, setSectionsS] = useState<any | any[] | undefined>()

  useEffect(() => {
    setData(todo)

  }, [props])
  useEffect(() => {
    const SectionsSync = async () => {
      if (Sections) {
        const dataR = await (Sections?.slice()?.reverse())
        await setSectionsS(dataR)
      }
    }
    SectionsSync()
  }, [props])

  sectionsS?.forEach((element: any) => {
    console.log("🚀 ~ file: Tabss.tsx:69 ~ Tabss ~ element:", element)

  });




  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



  const dataS: any | any[] = [
    {
      label: "Item One",
      content: "This is the content for item one.",
    },
    {
      label: "Item Two",
      content: "This is the content for item two.",
    },
    {
      label: "Item Three",
      content: "This is the content for item three.",
    },
  ];


  return (
    <div className={style.body}>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          height: 224,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          {dataS?.map((item: any) => (
            <Tab
              key={item.label}
              label={item.label}
              {...a11yProps(item.index)}
            >
              {item.content}
            </Tab>
          ))}
        </Tabs>
      </Box>
    </div>
  )
}

export default Tabss
