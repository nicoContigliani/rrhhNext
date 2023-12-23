import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import style from './show.module.css'
import Tabss from '../Tabss/Tabss';



const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});





const Modals = (props: any) => {
    const [data, setData] = useState()
    const [todos, setTodos] = useState()
    const [open, setOpen] = useState(false);

    const { todo, children } = props
    useEffect(() => {
        setTodos(todo)
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
console.log("********************")


    return (
        <div>

            <div onClick={handleClickOpen}>
                {children}
            </div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar
                         sx={{
                             position: 'relative', backgroundColor: '#00000019', color: "black",

                     }}

                    className={style.body}
                >
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Todo
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                  <Tabss/>

                </List>
            </Dialog>
        </div >
    )
}

export default Modals
