import React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const WelcomeImage = () => {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
                height: "100vh",
                width: "auto",
                backgroundColor: "primary.main",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <img
                src="/assets/images/Eblogo.png"
                alt="edubridgeindia-logo"
                width={240}
            />
            <Typography
                variant="h5"
                mt={0.5}
                sx={{ fontWeight: "400", fontSize: "16px", color: "#E6F5FF" }}
            >
                Placement Service
            </Typography>
        </Stack>
    );
};

export default WelcomeImage;
