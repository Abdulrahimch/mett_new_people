import { InputLabel, TextField, Box } from '@material-ui/core';
import CustomButton from '../../../components/CustomButton/CustomButton';
import useStyles from './useStyles';

import { Formik } from 'formik';
import * as Yup from 'yup';

function SignUpForm(): JSX.Element {
    const { inputs, inputLabel, form } = useStyles();

    const handleSubmit = () => {
        console.log('ths is submit');
    }
    return (
        <Formik
            initialValues={{
                userName: '',
                email: '',
                password: ''
            }}
            validationSchema={Yup.object().shape({
                userName: Yup.string().required('username is required'),
                email: Yup.string().required('Email is required').email('Email is not valid'),
                password: Yup.string()
                  .required('Password is required')
                  .max(100, 'Password is too long')
                  .min(6, 'Password too short'),
              })}
            onSubmit={handleSubmit}
        >
            {({handleSubmit, handleChange, values, errors, touched}) => (
                <form onSubmit={handleSubmit} className={form} noValidate>
                    <InputLabel className={inputLabel}>
                        username
                    </InputLabel>
                    <TextField
                        id="userName"
                        fullWidth
                        value={values.userName}
                        onChange={handleChange}
                        placeholder="username"
                        helperText={touched.userName ? errors.userName : ''}
                        error={touched.userName && Boolean(errors.userName)}
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
                        helperText={touched.email ? errors.email : ''}
                        error={touched.email && Boolean(errors.email)}
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
                        value={values.password}
                        onChange={handleChange}
                        placeholder="Password"
                        helperText={touched.password ? errors.password : ''}
                        error={touched.password && Boolean(errors.password)}
                        InputProps={{
                            classes: { input: inputs },
                            disableUnderline: true,
                        }}
                    />
                    <Box textAlign="center">
                        <CustomButton btnText='SignUp' style="submit" />
                    </Box>
                </form>
            )}

        </Formik>
    )
}
export default SignUpForm;