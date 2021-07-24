import { useFormikContext } from 'formik';
import React from 'react';

import AppTextInput from '../inputs/AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, ...otherProps }) {

    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

    return (
        <>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
            />
            <ErrorMessage visible={touched[name]} error={errors[name]} />
        </>
    );
}

export default AppFormField;