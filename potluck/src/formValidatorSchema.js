import * as yup from 'yup';

const formValidatorSchema = yup.object().shape({
username: yup
    .string()
    .trim()
    .required('Username is required!')
    .min(3, 'Username has to be at least three characters'),
password: yup
    .string()
    .required("Please Enter your password")
    .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),    

})

export default formValidatorSchema;