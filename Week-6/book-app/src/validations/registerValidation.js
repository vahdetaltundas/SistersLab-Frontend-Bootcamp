import * as Yup from "yup";

export const registerInitialValues={
    username: "",
    email: "",
    password: "",
    phoneNumber:0
}

export const registerValidationSchema= Yup.object({
    username: Yup.string().required("Username is required").max(50,"Username can be up to 50 characters"),
    email: Yup.string().required("Email is required").email("Email !!!!"),
    password: Yup.string().required("Password is required"),
    phoneNumber: Yup.number().required("Phone number is required")

})