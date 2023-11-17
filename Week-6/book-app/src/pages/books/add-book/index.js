import ErrorMessage from "@/components/ErrorMessage";
import {
  addBookInitialValue,
  addBookValidationSchema,
} from "@/validations/addBookValidation";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";

const AddBook = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: addBookInitialValue,
    validationSchema: addBookValidationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post('http://localhost:3001/books', values);
        alert('Book added successfully!');
        router.push('/');
      } catch (error) {
        alert('Failed to add book');
        console.error('An error occurred:', error);
      }
    },
  });
  return (
    <div>
      <h1 className="text-center mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Add Book
      </h1>

      <form onSubmit={formik.handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Book Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.touched.title && formik.errors.title ? (
            <ErrorMessage errorMessage={formik.errors.title} />
          ) : null}
        </div>
        <div className="mb-6">
          <label
            htmlFor="author"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Book Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formik.values.author}
            onChange={formik.handleChange}
          />
          {formik.touched.author && formik.errors.author ? (
            <ErrorMessage errorMessage={formik.errors.author} />
          ) : null}
        </div>
        <div className="mb-6">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Book Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          {formik.touched.price && formik.errors.price ? (
            <ErrorMessage errorMessage={formik.errors.price} />
          ) : null}
        </div>
        <div className="mb-6">
          <label
            htmlFor="currency"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Book Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formik.values.currency}
            onChange={formik.handleChange}
          >
            <option value="TR">TR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Book Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formik.values.description}
            onChange={formik.handleChange}
          ></textarea>
          {formik.touched.description && formik.errors.description ? (
            <ErrorMessage errorMessage={formik.errors.description} />
          ) : null}
        </div>
        <div className="mb-6">
          <label
            htmlFor="imageUrl"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Book İmageURL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formik.values.imageUrl}
            onChange={formik.handleChange}
          />
          {formik.touched.imageUrl && formik.errors.imageUrl ? (
            <ErrorMessage errorMessage={formik.errors.imageUrl} />
          ) : null}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
