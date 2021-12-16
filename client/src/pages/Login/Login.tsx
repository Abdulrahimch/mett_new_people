import useStyles from "./useStyles";
import { Grid, Box, Typography } from '@material-ui/core';
import LoginForm from './LoginForm/LoginForm';
import { login } from "../../helpers/APICalls/user";
import { useAuth } from '../../context/useAuthContext';
import { User } from "../../interface/User";

function Login(): JSX.Element {
    const { root, welcome } = useStyles();
    const { updateLoginContext } = useAuth(); 

    const handleSubmit = (inputs: User) => {
        login(inputs).then((data) => {
            if (data.error){
                console.log(data.error.message)
            } else if (data.success) {
                updateLoginContext(data.success)
            } else {
                console.log('An unexpected error occurred. Please try again !'); 
            }

        })
    };

    return (
        <>
            <Grid container component="main" className={root}>
                    <Grid item>
                        <Box
                            display="flex"
                            flexDirection="column"
                        >
                            <Typography variant="h2" className={welcome}>sign in</Typography>
                            <LoginForm handleSubmit={handleSubmit}/>
                        </Box>
                    </Grid>
            </Grid>
        </>
    )
};

export default Login;