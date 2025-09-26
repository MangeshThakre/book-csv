import React, { useState } from "react";
import BookDataListItem from "./BookDataListItem";

const DataTable = ({ booksData, setBooksData }) => {
  const [autherDropDown, setAutherDropDown] = useState({
    open: false,
    value: ""
  });
  const [genreDropDown, setGenreDropDown] = useState({
    open: false,
    value: ""
  });

  const handleAuthor = (genre) => {
    setAutherDropDown({
      value: genre,
      open: !autherDropDown.open
    });
  };

  const handleGenre = (genre) => {
    setGenreDropDown({
      value: genre,
      open: !genreDropDown.open
    });
  };

  return (
    <div className="relative  shadow-md m-5 ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sr.No
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Author
            </th>
            <th scope="col" className="px-6 py-3">
              Genre
            </th>
            <th scope="col" className="px-6 py-3">
              PublishedYear
            </th>
            <th scope="col" className="px-6 py-3">
              ISBN
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>

          {/* filter */}
          <tr>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3"></th>
            {/* auther */}
            <th scope="col" className="px-6 py-3">
              <button
                id="dropdownDefaultButton"
                className="w-44 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={() =>
                  setAutherDropDown({
                    ...autherDropDown,
                    open: !autherDropDown.open
                  })
                } // Toggle dropdown
              >
                {autherDropDown.value
                  ? autherDropDown.value
                  : "Dropdown button"}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdown"
                className={
                  autherDropDown.open
                    ? "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 block absolute"
                    : "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
                }
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  onClick={(e) => {
                    handleAuthor(e.target.innerText);
                  }}
                >
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Hardcover
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Audiobook
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Paperback
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Ebook
                    </a>
                  </li>
                </ul>
              </div>
              {/* Dropdown menu end */}
            </th>
            {/* genre */}
            <th scope="col" className="px-6 py-3">
              <button
                id="dropdownDefaultButton"
                className="w-44 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={() =>
                  setGenreDropDown({
                    ...genreDropDown,
                    open: !genreDropDown.open
                  })
                } // Toggle dropdown
              >
                {genreDropDown.value ? genreDropDown.value : "Dropdown button"}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdown"
                className={
                  genreDropDown.open
                    ? "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 block absolute"
                    : "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
                }
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200 overflow-y-scroll h-40"
                  onClick={(e) => {
                    handleGenre(e.target.innerText);
                  }}
                >
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Comic
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Psychology
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Historical Fiction
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Fantasy
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Classic
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Adventure
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Children's Literature
                    </a>
                  </li>
                </ul>
              </div>
              {/* Dropdown menu end */}
            </th>
            {/* date */}
            <th scope="col" className="px-6 py-3 flex gap-2">
              <button
                type="button"
                className="text-white mr-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Ace
              </button>

              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Dce
              </button>
            </th>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                search
              </button>
            </th>
          </tr>
          {/* filter end */}
        </thead>

        {/* book data list */}
        <tbody>
          {booksData.map((book, indexNo) => (
            <BookDataListItem
              booksData={booksData}
              setBooksData={setBooksData}
              book={book}
              indexNo={indexNo}
              key={book.bookId}
            />
          ))}
        </tbody>
        {/* book data list end */}
      </table>
      {/* Pagination */}
      <div className="text-xs h-14 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <div className="px-3 flex  justify-between py-2">
          <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800  hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg
              className="w-3.5 h-3.5 me-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Prev
          </button>
          <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800   hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* pagination end */}
    </div>
  );
};

export default DataTable;
