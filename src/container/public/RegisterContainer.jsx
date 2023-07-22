import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import WelcomeImage from "../../components/public/WelcomeImage.jsx";
import LoginFormComponent from "../../components/public/login/LoginForm.jsx";
import { axios } from "../../helpers/axios.js";
import { authenticate } from "../../helpers/cookies.js";
import withNavigate from "../../routes/withNavigate.jsx";
import RegisterFormComponent from "../../components/public/login/RegisterForm.jsx";

class RegisterContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: false,
        };
    }

    handleSubmit = async (data) => {
        try {
            this.setState({
                loading: true,
            });
            const register_response = await axios.post(process.env.REACT_APP_USER_CREATE_URL, data);
            if (register_response?.success) {
                this.props.navigate('/')
            }
            this.setState({
                loading: false,
            });
        } catch (error) {
            this.setState({
                loading: false,
            });
        }
    };

    goToLogin = () => {
        this.props.navigate("/");
    }

    render() {
        const { loading } = this.state;

        return (
            <Box>
                <Grid sx={{ height: "100vh" }} container spacing={0}>
                    <Grid item xs={5}>
                        <WelcomeImage />
                    </Grid>
                    <Grid item xs={7}>
                        <RegisterFormComponent
                            loading={loading}
                            submit={this.handleSubmit}
                            goToLogin={this.goToLogin}
                        />
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default withNavigate(RegisterContainer);
