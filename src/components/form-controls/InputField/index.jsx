import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    const {
        formState: { errors },
    } = form;
    const hasError = errors[name];
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) => {
                return (
                    <TextField
                        margin="normal"
                        {...field}
                        fullWidth
                        label={label}
                        disabled={disabled}
                        error={!!hasError}
                        helperText={errors[name]?.message}
                    />
                );
            }}
        />
    );
}

export default InputField;
