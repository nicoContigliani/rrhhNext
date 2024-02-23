
import React, { useEffect, useState } from 'react'

import VisibilityIcon from '@mui/icons-material/Visibility';

import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Search } from '@mui/icons-material'
import style from './modals.module.css'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const Modalnew = (props: any) => {

    const { title, children } = props
    const [data, setData] = useState<any | any[] | undefined>()
    const [todos, setTodos] = useState()
    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div className={style.bodyTodo}>


            <div onClick={handleClickOpen}>
                {title === "Show" && <VisibilityIcon />}
                {title === "Update" && <PublishedWithChangesIcon />}
            </div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar
                    sx={{
                        position: 'relative', backgroundColor: 'white', color: "black",
                    }}

                >
                    <Toolbar>

                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {title === "Show" && <VisibilityIcon />}
                            {title === "Update" && <PublishedWithChangesIcon />}
                        </Typography>
                        {/* <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button> */}
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>

                </AppBar>
                <List className={style.div}>
                    {children}
                </List>
            </Dialog>
        </div>
    )
}

export default Modalnew

