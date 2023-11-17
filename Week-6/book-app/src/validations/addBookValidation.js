import * as Yup from "yup";

export const addBookInitialValue = {
  title: "",
  author: "",
  price: 0,
  description: "",
  currency: "",
  imageUrl: "",
};

export const addBookValidationSchema=Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  price: Yup.number()
    .positive("Price must be a positive number")
    .required("Price is required"),
  description: Yup.string().required("Description is required"),
  currency: Yup.string(),
  imageUrl: Yup.string().url("Image URL, must have URL")
})