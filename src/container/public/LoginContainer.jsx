import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import WelcomeImage from "../../components/public/WelcomeImage.jsx";
import LoginFormComponent from "../../components/public/login/LoginForm.jsx";
import { axios } from "../../helpers/axios";
import { authenticate } from "../../helpers/cookies";
import withNavigate from "../../routes/withNavigate";

class LoginContainer extends React.Component {
    
    constructor() {
        super();
        this.state = {
            loading: false,
        };
    }

    handleSignIn = async (data) => {
        try {
            this.setState({
                loading: true,
            });
            const login_response = await axios.post(process.env.REACT_APP_LOGIN_URL, data);
            if (login_response?.success) {
                authenticate(login_response, (res) =>{
                    if(res){
                        window.location.reload()
                    } else {
                        this.props.navigate('/noroles')
                    }
                });
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


    goTOregister = () => {
        console.log("here")
        this.props.navigate("/register");
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
                        <LoginFormComponent
                            loading={loading}
                            submit={this.handleSignIn}
                            goTOregister={this.goTOregister}
                        />
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default withNavigate(LoginContainer);
