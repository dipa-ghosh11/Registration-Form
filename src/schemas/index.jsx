import * as yup from 'yup';

export const inputValidation=yup.object({
    name: yup.string().matches(/^[a-zA-Z\s]*$/, "Name must contain only alphabets").required("Name is required"),
    age: yup.string().matches(/^(?:[1-9][0-9]?|120)$/, "Age must be a number & greater than 0").required("Age is required"),
    email: yup.string().email("Invalid Email").required("Email is requird"),
    cs: yup.string().required("Course selection is requird"),
})