import { Grid, Box, Typography, Paper } from '@material-ui/core';
import SignUpForm from './SignUpForm/SignUpForm';
import useStyles from './useStyles';

function SignUp(): JSX.Element {
    const { root, welcome } = useStyles();
    return (
        <>
            <Grid container component={Paper} className={root}>
                <Grid item>
                    <Box
                        display="flex" 
                        flexDirection="column"
                    >
                        <Typography variant="h4" className={welcome}>Sign Up</Typography>
                        <SignUpForm />

                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default SignUp;
