import React from "react";
import { Formik } from "formik";
import { UserValidation } from "./UserValidation";
import { Drawer, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/CloseOutlined"
import IconButtonIcons from "../../Common/IconButtonIcons";
import Input from "../../Common/Input";
import Button from "../../Common/Button";
import { useDispatch } from "react-redux";
import { setSnackBar } from "../../../store/common/commonSlice";
import { useAddNewUserMutation, useUpdateUserMutation } from "../../../store/user/userApis";
import MultipleSelectJson from "../../Common/MultipleSelectJson";
import { rolesSampleData } from "../../../helpers/sampleData";
import BasicSelect from "../../Common/Select";

export const UserAddDrawer = ({ initialValues, show, close, formType }) => {
    const dispatch = useDispatch();
    const [addNewUser, { isLoading: addUserLoading }] = useAddNewUserMutation();
    const [updateUser, { isLoading: updateUserLoading }] = useUpdateUserMutation();
    const disabled = formType === 'View' ? true : false;

    const onFormSubmit = async (values) => {
        try {
            let payload = { ...values };
            payload.roles = payload.roles.map((val) => {
                return val.value;
            })

            if (formType === "Edit") {
                await updateUser(values).unwrap();
                dispatch(setSnackBar({
                    open: true,
                    message: "User updated successfully",
                    severity: "success",
                }))
            } else {
                await addNewUser(values).unwrap();
                dispatch(setSnackBar({
                    open: true,
                    message: "User created successfully",
                    severity: "success",
                }))
            }
            close();
        } catch (error) {
            dispatch(setSnackBar({
                open: true,
                message: error?.data?.payload?.message || "Something went wrong please try again later.",
                severity: "error",
            }))
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => onFormSubmit(values)}
            validationSchema={UserValidation}
            enableReinitialize
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                setFieldValue
            }) => (
                <Drawer
                    anchor={"right"}
                    open={show}
                    PaperProps={{
                        sx: { width: { xs: '100%', md: '70%', sm: "70%", lg: "70%" } },
                    }}
                    onClose={() => close()}
                >
                    <Grid sx={{ display: "flex" }} direction={"column"} width={"100%"} height={"100%"} >
                        <Grid container flex={0} px={1} py={1} borderBottom={1} borderColor={"rgba(5, 5, 5, 0.06)"}>
                            <Grid item alignSelf={"center"}>
                                <IconButtonIcons color="default" title="Close" IconComponent={CloseIcon} onClick={() => close()} />
                            </Grid>
                            <Grid item alignSelf={"center"}>
                                <Typography variant="h6">{formType} Users</Typography>
                            </Grid>
                        </Grid>
                        <Grid flex={1} px={2} py={5} overflow={"auto"}>
                            <Grid container spacing={2} >
                                <Grid item xs={12} md={6}>
                                    <Input
                                        id='name'
                                        name="name"
                                        label="Name *"
                                        onChange={handleChange("name")}
                                        value={values?.name || ""}
                                        error={Boolean(errors.name)}
                                        helperText={errors.name}
                                        fullWidth
                                        disabled={disabled}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Input
                                        id='email'
                                        name="email"
                                        label="Email *"
                                        onChange={handleChange("email")}
                                        value={values?.email || ""}
                                        error={Boolean(errors.email)}
                                        helperText={errors.email}
                                        fullWidth
                                        disabled={disabled}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Input
                                        id='mobile'
                                        name="mobile"
                                        label="Mobile *"
                                        onChange={handleChange("mobile")}
                                        value={values?.mobile || ""}
                                        error={Boolean(errors.mobile)}
                                        helperText={errors.mobile}
                                        fullWidth
                                        disabled={disabled}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <MultipleSelectJson
                                        options={rolesSampleData}
                                        onChange={(val) => setFieldValue("roles", val)}
                                        id={"roles"}
                                        name={"roles"}
                                        label={"roles *"}
                                        value={values?.roles || []}
                                        fullWidth
                                        color={""}
                                        size="small"
                                        error={Boolean(errors.roles)}
                                        helperText={errors.roles}
                                        disabled={disabled}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <BasicSelect
                                        size="small"
                                        value={values?.status || ""}
                                        onChange={handleChange("status")}
                                        displayEmpty
                                        label="Status *"
                                        name="status"
                                        id="status"
                                        items={[
                                            { label: "Active", value: "true" },
                                            { label: "In-active", value: "false" },
                                        ]}
                                        error={Boolean(errors.status)}
                                        helperText={errors.status}
                                        disabled={disabled}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        {
                            formType !== 'View'
                                ?
                                <Grid flexShrink={0} borderTop={1} borderColor={"rgba(152, 188, 252, 0.16)"} sx={{ padding: "8px 16px" }}>
                                    <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
                                        <Grid sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Button size="large" color="warning" type="button" onClick={() => close()}>Cancel</Button>
                                            <Button size="large" type="submit" loading={addUserLoading || updateUserLoading} onClick={() => handleSubmit()}>Save</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                :
                                null
                        }

                    </Grid>
                </Drawer>
            )
            }
        </Formik >
    )
}