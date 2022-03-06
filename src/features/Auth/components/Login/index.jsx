import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
import { login } from 'features/Auth/userSlice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

Login.propTypes = {
    closeDialog: PropTypes.func,
};

function Login({ closeDialog }) {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const handleSubmit = async (values) => {
        try {
            const action = login(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            // close dialog
            if (closeDialog) closeDialog();
            enqueueSnackbar('Đăng nhập thành công', { variant: 'success' });
        } catch (error) {
            console.log('Login failed: ', error);
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    };
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;
