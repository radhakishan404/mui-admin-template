import { Grid, Typography } from "@mui/material";
import React from "react";

class DashboardContainer extends React.Component {

    render() {
        return (
            <Grid container spacing={3}>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Typography variant='h4' >Some charts</Typography>
                </Grid>
            </Grid>
        );
    }
}

export default DashboardContainer;