import useStyles from "./useStyles";
import { Grid, Box, Typography } from '@material-ui/core';
import LoginForm from './LoginForm/LoginForm';

function Login(): JSX.Element {
    const { root, welcome } = useStyles();
    return (
        <>
            <Grid container component="main" className={root}>
                    <Grid item>
                        <Box
                            display="flex"
                            flexDirection="column"
                        >
                            <Typography variant="h2" className={welcome}>sign in</Typography>
                            <LoginForm />
                        </Box>
                    </Grid>
            </Grid>
        </>
    )
};

export default Login;