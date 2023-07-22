import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetUserListQuery } from "../../../store/user/userApis";
import { setSnackBar } from "../../../store/common/commonSlice";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import UserTableComponent from "../../../components/admin/user-manager/UserTable";
import { UserAddDrawer } from "../../../components/admin/user-manager/UserAddDrawer";

const UserManagerContainer = (props) => {
    const { showDrawer, formType, initialValues } = props;
    const dispatch = useDispatch();
    const { isLoading, isError, error, data: users } = useGetUserListQuery();

    useEffect(() => {
        if (isError) {
            if (Array.isArray(error.data.error)) {
                error.data.error.forEach((el) =>
                    dispatch(setSnackBar({
                        open: true,
                        message: el.message,
                        severity: "error",
                    }))
                );
            } else {
                dispatch(setSnackBar({
                    open: true,
                    message: error.data.message,
                    severity: "error",
                }))
            }
        }
    }, [isLoading, error, dispatch, isError]);

    const handleAddUser = () => {
        props.changeUserInitialState({
            showDrawer: true,
            formType: "Add"
        })
    }

    const handleDrawerClose = () => {
        props.changeUserInitialState({ showDrawer: false, formType: "" })
    }

    const handleUserEdit = (data, type) => {
        props.changeUserInitialState({ showDrawer: true, formType: type, initialValues: data })
    }

    return (
        <Stack spacing={1}>
            <Paper sx={{ marginBottom: "24px", padding: 1.5 }}>
                <Grid container justifyContent="space-between">
                    <Grid item sx={{ alignSelf: "center" }}>
                        <Typography variant="h6">List of Users</Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            disableElevation
                            variant="contained"
                            sx={{ borderRadius: "50px" }}
                            onClick={() => handleAddUser()}
                        >
                            Add new User
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            <Grid container>
                <Grid item xs={12}>
                    <Paper
                        sx={{ p: 2, color: "#071B2A", fontWeight: "400" }}
                        elevation={0}
                    >
                        <UserTableComponent edit={(val, type) => handleUserEdit(val, type)} loading={isLoading} data={users} />
                    </Paper>
                </Grid>
            </Grid>

            {/* add taf drawer */}
            <UserAddDrawer show={showDrawer} close={handleDrawerClose} formType={formType} initialValues={initialValues} />

        </Stack >
    );
}

export default UserManagerContainer;