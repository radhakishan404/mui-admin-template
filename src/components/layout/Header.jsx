// assets
import { useNavigate } from 'react-router-dom';

// mui components
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Logout } from '@mui/icons-material';
import IconMenu from '@mui/icons-material/Menu';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';

// helpers
import { isAuth, signout } from '../../helpers/cookies';
import { useTheme } from '@emotion/react';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleSignOut = () => {
        signout(() => navigate(0));
    };

    return (
        <>
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1, textAlign: "center" }}>
                    <img
                        style={{
                            width: "50%",
                            verticalAlign: "middle"
                        }}
                        src={
                            theme.palette.mode === "dark"
                                ? "/assets/images/logo_white.webp"
                                : "/assets/images/Eblogo.png"
                        }
                        alt='edubridgeindia_logo'
                    />
                </Box>
            </Box>

            <Box sx={{ flexGrow: 1 }} >
                <IconButton sx={{ borderRadius: '12px', overflow: 'hidden' }} onClick={handleLeftDrawerToggle}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.background.default,
                            color: theme.palette.text.primary,
                        }}
                        color="inherit"
                    >
                        <IconMenu stroke={1.5} size="1.3rem" />
                    </Avatar>
                </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />

            <Stack
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={1}
            >
                <Stack
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                >
                    <IconButton
                        title='View profile'
                        size='small'
                        onClick={() => navigate("/profile")}
                    >
                        <AccountCircle
                            sx={{ color: "#bdbdbd", width: "32px", height: "32px" }}
                        />
                    </IconButton>
                    <Typography
                        onClick={() => navigate("/profile")}
                        variant='subtitle1'
                        color='text.primary'
                    >
                        {isAuth().name}
                    </Typography>
                </Stack>
                <IconButton
                    title='Log Out'
                    size='small'
                    onClick={handleSignOut}
                >
                    <Logout
                        sx={{
                            width: "24px",
                            height: "24px",
                        }}
                    />
                </IconButton>
            </Stack>
        </>
    );
};

export default Header;