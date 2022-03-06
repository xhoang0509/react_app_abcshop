import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, createTheme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
RegisterForm.propTypes = {};
const theme = createTheme();
const useStyles = makeStyles(() => {
    return {
        root: {
            position: 'relative',
            paddingTop: theme.spacing(4),
        },

        avatar: {
            margin: '0 auto',
            backgroundColor: [theme.palette.error.main, '!important'],
        },

        title: {
            margin: theme.spacing(2, 0, 2, 0),
            textAlign: 'center',
        },

        submit: {
            margin: theme.spacing(3, 0, 2, 0),
        },

        progress: {
            position: 'absolute',
            top: theme.spacing(1.5),
            left: 0,
            right: 0,
        },
    };
});
const schema = yup.object().shape({
    fullName: yup
        .string()
        .required('Yêu cầu nhập họ và tên.')
        .test('should has at least two words', 'Yêu cầu nhập 2 từ trở lên', (value) => {
            value = value.trim();
            return value.split(' ').length >= 2;
        }),
    email: yup
        .string()
        .required('Yêu cầu nhập Email.')
        .email('Email không đúng định dạng, yêu cầu nhập lại!'),
    password: yup.string().required('Yêu cầu nhập mật khẩu').min(6, 'Yêu cầu nhập 6 kí tự'),
    retypePassword: yup
        .string()
        .required('Yêu cầu nhập lại mật khẩu')
        .oneOf([yup.ref('password')], 'Mật khẩu không khớp'),
});
function RegisterForm(props) {
    const classes = useStyles();

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });

    const { isSubmitting } = form.formState;

    const formSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
    };
    return (
        <Box>
            <Avatar className={classes.avatar} sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography className={classes.title} component="h3" variant="h5">
                Đăng Kí Tài Khoản
            </Typography>

            <form onSubmit={form.handleSubmit(formSubmit)}>
                <InputField label="Họ và tên" name="fullName" form={form} />
                <InputField label="Email" name="email" form={form} />
                <PasswordField label="Mật khẩu" name="password" form={form} />
                <PasswordField label="Nhập lại mật khẩu" name="retypePassword" form={form} />
                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    fullWidth
                    color="primary"
                    size="large"
                >
                    Tạo tài khoản
                </Button>
            </form>
        </Box>
    );
}

export default RegisterForm;
