import React from "react";
import PropTypes from "prop-types";
const Card = ({ movie ,detailAction,detailVisible}) => {
  return (
    <div>
      <div>
        <div className="relative h-[80vh] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg p-3 h-80 w-full"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
              {movie.original_title}
            </h5>
            <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
              {movie.overview}
            </p>
            <button className="absolute px-4 py-4 bottom-0 left-0 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
            {detailVisible&&(
              <button className="absolute bottom-0 right-0 mb-2 mr-2 bg-green-500 text-white px-4 py-2 rounded" onClick={detailAction}>
              Detayına Git
            </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  movie: PropTypes.object.isRequired,
  detailAction: PropTypes.func,
  detailVisible: PropTypes.bool,
};
Card.defaultProps = {
  detailVisible: true,
};
export default Card;
