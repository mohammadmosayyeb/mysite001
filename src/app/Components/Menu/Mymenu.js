"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Menu, CameraAltTwoTone, ComputerTwoTone, PersonTwoTone, ImportContactsTwoTone, FactCheckTwoTone, HomeTwoTone } from '@mui/icons-material';
import "./menu.css"
import Link from 'next/link';
export default function SwipeableTemporaryDrawer(param) {
    const [state, setState] = React.useState({

        bottom: false,

    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                background: "#1E3641",
                direction: "rtl",
                textAlign: "right",
                fontFamily: "f2",

            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='chwgh3wegf8704f'>

            </div>

            <Link href={"/"}>

                <ListItem disablePadding >
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeTwoTone sx={{ color: "whitesmoke" }} />
                        </ListItemIcon>
                        <ListItemText className='listediteminacfaoeu' primary={"صفحه اصلی"} />
                    </ListItemButton>
                </ListItem>

            </Link>
            <Divider />
            <List>
                {param.listOfnavitem.map((text, index) => (


                    <Link
                        href={
                            index == 0 ? "/Pages/About" :
                                index == 1 ? "/Pages/Abilities" :
                                    index == 2 ? "/Pages/Services" :
                                        index == 3 ? "/Pages/Portfolios" :
                                            index == 4 ? "/Pages/Certificates" : ""
                        }

                    >

                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index === 0 ? <PersonTwoTone sx={{ color: "whitesmoke" }} /> : ""}
                                    {index === 1 ? <ComputerTwoTone sx={{ color: "whitesmoke" }} /> : ""}
                                    {index === 2 ? <CameraAltTwoTone sx={{ color: "whitesmoke" }} /> : ""}
                                    {index === 3 ? <FactCheckTwoTone sx={{ color: "whitesmoke" }} /> : ""}
                                    {index === 4 ? <ImportContactsTwoTone sx={{ color: "whitesmoke" }} /> : ""}
                                </ListItemIcon>
                                <ListItemText className='listediteminacfaoeu' primary={text} />
                            </ListItemButton>
                        </ListItem>

                    </Link>
                ))}
            </List>

        </Box>
    );

    return (
        <div>
            {['bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <Menu />
                    </Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}