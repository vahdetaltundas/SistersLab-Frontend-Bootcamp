import Image from "next/image";
import React from "react";

const BookCard = ({ book,detail,remove }) => {
  return (
    <div>
      <div className="block rounded-lg bg-white shadow-[0_3px_20px_-5px_rgba(0,0,0,0.08),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <a href="#!">
          <img
            className="rounded-t-lg w-full h-[25rem] p-5"
            src={book.imageUrl}
            alt={book.title}
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 line-clamp-1">
            {book.title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 line-clamp-4">
            {book.description}
          </p>
          <div className="flex justify-between">
            <button onClick={detail} className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            </button>
            <button onClick={remove} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
