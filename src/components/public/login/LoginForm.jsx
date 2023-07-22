import React, { useState } from "react";
import Button from "../../Common/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Formik } from "formik";
import Input from "../../Common/Input";
import * as yup from "yup";
import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

const validateLoginForm = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
});

const LoginFormComponent = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const { submit, loading, goTOregister } = props;
    const initialValues = {
        username: "",
        password: "",
    };

    const onFormSubmit = async (values) => {
        submit(values);
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => onFormSubmit(values)}
                validationSchema={validateLoginForm}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    touched,
                    errors,
                }) => (
                    <>

                        <Container maxWidth="xs">
                            <Stack
                                alignItems="center"
                                justifyContent="center"
                                sx={{
                                    height: "100vh",
                                    width: "auto",
                                    mx: 4,
                                }}
                                spacing={1.5}
                            >
                                <Typography
                                    variant="h5"
                                    align="center"
                                    sx={{
                                        fontWeight: "600",
                                        textTransform: "uppercase",
                                        // color: "#212121",
                                        fontSize: "28px",
                                    }}
                                >
                                    Login
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    align="center"
                                    sx={{ fontSize: "15px", color: "#7D7D7D" }}
                                >
                                    Welcome Back
                                </Typography>

                                <Input
                                    type="text"
                                    fullWidth
                                    placeholder="Enter username"
                                    id="username"
                                    name="username"
                                    variant="outlined"
                                    onChange={handleChange("username")}
                                    onBlur={handleBlur("username")}
                                    value={values.username}
                                    error={errors.username && Boolean(errors.username)}
                                    helperText={errors.username}
                                />

                                <Input
                                    type={showPassword ? "text" : "password"}
                                    fullWidth
                                    placeholder="Enter password"
                                    id="password"
                                    name="password"
                                    variant="outlined"
                                    onChange={handleChange("password")}
                                    onBlur={handleBlur("password")}
                                    value={values.password}
                                    error={errors.password && Boolean(errors.password)}
                                    helperText={errors.password}
                                    InputProps={{ // <-- This is where the toggle button is added.
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />

                                <Button
                                    onClick={handleSubmit}
                                    loading={loading}
                                    fullWidth
                                >
                                    Continue
                                </Button>
                                <Button
                                    onClick={() => goTOregister()}
                                    fullWidth
                                    sx={{
                                        color: "#ffffff",
                                        backgroundColor: "orange",
                                        "&:hover": {
                                            backgroundColor: "orange",
                                        },
                                    }}
                                >
                                    New - Click to register
                                </Button>
                            </Stack>
                        </Container>
                    </>
                )}
            </Formik>
        </>
    );
};
export default LoginFormComponent;
