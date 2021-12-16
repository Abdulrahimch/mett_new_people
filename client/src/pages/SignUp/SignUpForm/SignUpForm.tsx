import { InputLabel, TextField, Box, Button } from '@material-ui/core';
import CustomButton from '../../../components/CustomButton/CustomButton';
import useStyles from './useStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { User } from '../../../interface/User';

interface Props {
    handleSubmit: (inputs: User) => void
};

function SignUpForm({ handleSubmit }: Props): JSX.Element {
    const { inputs, inputLabel, form } = useStyles();
    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: ''
            }}
            validationSchema={Yup.object().shape({
                username: Yup.string().required('Username is reqeuired!').min(3, 'Username is too short'),
                email: Yup.string().required('email is reqeuired!').email('Please enter a valid email!'),
                password: Yup.string().required('Password is requried!').min(5, 'Password is too short!')
            })}
            onSubmit={(values) => handleSubmit(values)}
        >
            {({handleSubmit, handleChange, values, errors, touched,  isSubmitting}) => (
                <form onSubmit={handleSubmit} className={form} noValidate>
                    <InputLabel className={inputLabel}>
                        username
                    </InputLabel>
                    <TextField
                        id="username"
                        fullWidth
                        value={values.username}
                        onChange={handleChange}
                        placeholder="username"
                        helperText={errors.username}
                        error={Boolean(errors.username)}
                        InputProps={{
                            classes: { input: inputs },
                            disableUnderline: true,
                        }}
                    />
                    <InputLabel className={inputLabel}>
                        email
                    </InputLabel>
                    <TextField
                        id="email"
                        fullWidth
                        value={values.email}
                        onChange={handleChange}
                        placeholder="email"
                        helperText={errors.email}
                        error={Boolean(errors.email)}
                        InputProps={{
                            classes: { input: inputs },
                            disableUnderline: true,
                        }}
                    />
                    <InputLabel className={inputLabel}>
                        password
                    </InputLabel>
                    <TextField
                        id="password"
                        fullWidth
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="Password"
                        helperText={errors.password}
                        error={Boolean(errors.password)}
                        InputProps={{
                            classes: { input: inputs },
                            disableUnderline: true,
                        }}
                    />
                    <Box textAlign='center'>
                        <CustomButton btnText='SignUp' style="submit" isSubmit={true} />
                    </Box>
                    </form>  
            )}
            

        </Formik>
    )
}
export default SignUpForm;