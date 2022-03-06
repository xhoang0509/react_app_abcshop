import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';

Register.propTypes = {};

function Register({ closeDialog }) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const handleSubmit = async (values) => {
        try {
            // auto set username = email
            values.username = values.email;

            const action = register(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            // close dialog
            if (closeDialog) {
                closeDialog();
            }

            // do something here on register successfully
            enqueueSnackbar('Đăng kí tài khoản thành công', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    };
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;
