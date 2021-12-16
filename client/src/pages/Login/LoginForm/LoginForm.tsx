import { Box, InputLabel, TextField, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomButton from '../../../components/CustomButton/CustomButton';
import useStyles from './useStyles';
import { Link } from 'react-router-dom';
import { User } from '../../../interface/User';

interface Props {
    handleSubmit: (inputs: User) => void;
};

function LoginForm({ handleSubmit }: Props): JSX.Element{
    const { inputs, inputLabel, link, caption } = useStyles();

    return (
        <Formik
            initialValues={{ 
                email: '',
                password: ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().required('Email is required').email('Email is not valid'),
                password: Yup.string()
                  .required('Password is required')
                  .max(100, 'Password is too long')
                  .min(6, 'Password too short'),
              })}
            onSubmit={(values) => handleSubmit(values)}
        >
        {({handleSubmit, handleChange, values, touched, errors, isSubmitting}) => (
            <form onSubmit={handleSubmit} noValidate>
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
                    type="password"
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
                    <CustomButton btnText='Submit' style="submit" isSubmit={true}/>
                </Box>
                <Box textAlign="center">
                <Typography className={caption}>
                    {"Don't have an account?"}
                    <Link className={link} to="/signup">
                        Signup
                    </Link>
              </Typography>
            </Box>
            </form>
        )}

        </Formik>
    )
}

export default LoginForm;
