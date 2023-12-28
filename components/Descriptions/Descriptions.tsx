import React, { useEffect, useState } from 'react'
import style from './Descriptions.module.css'
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const styles = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};



const DescriptionS = (props: any | undefined) => {
  console.log("🚀 ~ file: Descriptions.tsx:8 ~ DescriptionS ~ props:", props)

  const { todo } = props
  const [data, setData] = useState<any | any[] | undefined>(todo)
  useEffect(() => {
    setData(todo)
  }, [props])





  return (
    <div className={style.body} >



      {data.map((item: any) => (
        <div className={style.itemSlice}
          key={item.id}>
          <List sx={styles} component="nav" aria-label="mailbox folders">
            <ListItem button >
              <ListItemText primary={`${item.itemSection?.title_atribute}:`} />
              <ListItemText secondary={item.itemSection?.atribute} />
            </ListItem>
         
            {item.itemSection?.title_atribute === "Work" ? (
              <div>

                <ListItem button>
                  <ListItemText primary="Start Work:" />
                  <ListItemText secondary={item?.itemSection?.startDate} />
                  <Divider />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="End Work:" />
                  <ListItemText secondary={item?.itemSection?.endDate} />
                </ListItem>

              </div>
            ) : (
              <div></div>
            )}


          </List>





          <Table striped bordered hover>
            <tbody>
              {/* 
              {item.itemSection?.title_atribute === "Work" ? (
                <div>

                  <tr>
                    <td>Start Work:</td>
                    <td>{item?.itemSection?.startDate}</td>
                  </tr>
                  <tr>
                    <td> End  Wor:</td>
                    <td>{item?.itemSection?.endDate}</td>
                  </tr>

                </div>
              ) : (
                <div></div>
              )} */}


            </tbody>

          </Table>


        </div>

      ))}


      {/* <Container>
        {data.map((item: any) => (
          <div className={style.itemSlice}
            key={item.id}>

            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>{item.itemSection?.title_atribute}:</td>
                  <td>{item.itemSection?.atribute}</td>
                </tr>
              </tbody>

            </Table>


            <Table striped bordered hover>
              <tbody>

                {item.itemSection?.title_atribute === "Work" ? (
                  <div>

                    <tr>
                      <td>Start Work:</td>
                      <td>{item?.itemSection?.startDate}</td>
                    </tr>
                    <tr>
                      <td> End  Wor:</td>
                      <td>{item?.itemSection?.endDate}</td>
                    </tr>

                  </div>
                ) : (
                  <div></div>
                )}


              </tbody>

            </Table>


          </div>

        ))}
      </Container> */}
    </div>






  )
}

export default DescriptionS
