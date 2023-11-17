import * as Yup from "yup";

export const loginInitialValues={
    email:"",
    password:"",
};

export const loginValidationSchema=Yup.object({
    email: Yup.string().required("Enter your e-mail address").email("E-mail !!!!"),
    password: Yup.string().required("Enter your password")
})
