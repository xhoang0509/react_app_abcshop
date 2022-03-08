import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
Service.propTypes = {};
const theme = createTheme({
    palette: {
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});
const useStyles = makeStyles(() => {
    return {
        root: {
            display: 'flex',
            justifyContent: 'center',
            '& button': {
                minWidth: '150px',
            },
        },
    };
});
function Service(props) {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Grid
                pt={2}
                container
                rowSpacing={1}
                columnSpacing={{ xs: 12, sm: 12, md: 4 }}
                className={classes.root}
            >
                <Grid item>
                    <Button type="submit" variant="contained" color="primary" size="large">
                        <FacebookIcon />
                        Facebook
                    </Button>
                </Grid>
                <Grid item>
                    <Button type="submit" variant="contained" color="error" size="large">
                        <GoogleIcon />
                        Google
                    </Button>
                </Grid>
                <Grid item>
                    <Button type="submit" variant="contained" color="neutral" size="large">
                        <GitHubIcon />
                        Github
                    </Button>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Service;
