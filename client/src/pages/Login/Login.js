import React from 'react';

import {withStyles} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import {validateEmail, validatePassword} from "../../utils/validation";
import LoginButton from "../../components/Login/LoginButton";

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        marginTop: theme.spacing(3),
    },
    roleSelection: {
        width: "100%"
    }
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: "Diner",
            email: "",
            password: "",
            isValidEmail: true,
            isValidPassword: true,
            emailHelperText: "",
            passwordHelperText: ""
        }
    }

    onSubmit = (role) => {
        if (!validateEmail(this.state.email)) {
            this.setState({emailHelperText: "Email should be in the form example@example.com", isValidEmail: false});
        } else {
            this.setState({emailHelperText: "", isValidEmail: true});
        }
        if (!validatePassword(this.state.password)) {
            this.setState({passwordHelperText: "Invalid password", isValidPassword: false});
        } else {
            this.setState({passwordHelperText: "", isValidPassword: true});
        }
    };

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    };

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    };

    render() {
        const { classes } = this.props;

        return (
            <Container>
                <CssBaseline>
                    <div className={classes.paper}>
                        <Typography variant="h5" component="h1">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                error = {!this.state.isValidEmail}
                                helperText={this.state.emailHelperText}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                error = {!this.state.isValidPassword}
                                helperText={this.state.passwordHelperText}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <LoginButton
                                className={classes.submit}
                                onClick={this.onSubmit}
                            />
                        </form>
                    </div>
                </CssBaseline>
            </Container>
        );
    }
}

export default withStyles(styles)(Login);
