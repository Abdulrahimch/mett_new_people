import { Grid, Box, Typography, Paper } from '@material-ui/core';
import { register } from '../../helpers/APICalls/user';
import SignUpForm from './SignUpForm/SignUpForm';
import useStyles from './useStyles';
import { User } from '../../interface/User';
import { useAuth } from '../../context/useAuthContext';

function SignUp(): JSX.Element {
    const { root, welcome } = useStyles();
    const { updateLoginContext } = useAuth();

    const handleSubmit = (inputs: User) => {

        register(inputs).then((data) => {
            if (data.error) {
                console.log(data.error)
            } else if (data.success) {
                updateLoginContext(data.success);
            } else {
                console.log('An unexpected error occurred. Please try again !');
                // updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        })
    }
    return (
        <>
            <Grid container component={Paper} className={root}>
                <Grid item>
                    <Box
                        display="flex" 
                        flexDirection="column"
                    >
                        <Typography variant="h4" className={welcome}>Sign Up</Typography>
                        <SignUpForm handleSubmit={handleSubmit}/>

                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default SignUp;
