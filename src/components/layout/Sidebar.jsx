
import { useNavigate } from "react-router-dom";

// mui component
import { useTheme } from "@emotion/react";
import { Box, Drawer, useMediaQuery } from "@mui/material";

// constants
import { drawerWidth } from "../../helpers/constants";
import { isAuth } from "../../helpers/cookies";

// third-party
import { BrowserView, MobileView } from "react-device-detect";
import PerfectScrollbar from 'react-perfect-scrollbar';

// custom component
import LogoSection from "./LogoSection";
import MenuList from "./MenuList";


const Sidebar = ({ drawerOpen, drawerToggle, modules }) => {
    const userRoles = isAuth()['roles'];

    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const path_url = window.location.pathname;

    const navigate = useNavigate();

    return (
        <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }} aria-label="mailbox folders">
            <Drawer
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        [theme.breakpoints.up('md')]: {
                            top: '88px'
                        }
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <Box sx={{ display: 'flex', p: 2, mx: 'auto', width: "60%" }}>
                        <LogoSection theme={theme} />
                    </Box>
                </Box>
                <BrowserView>
                    <PerfectScrollbar
                        component="div"
                        style={{
                            height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                        }}
                    >
                        <MenuList modules={modules} roles={userRoles} navigate={navigate} path_url={path_url} theme={theme} />
                    </PerfectScrollbar>
                </BrowserView>
                <MobileView>
                    <PerfectScrollbar
                        component="div"
                        style={{
                            height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                        }}
                    >
                        <MenuList modules={modules} roles={userRoles} navigate={navigate} path_url={path_url} theme={theme} />
                    </PerfectScrollbar>
                </MobileView>
            </Drawer>
        </Box >
    );
}

export default Sidebar;
