import React from "react";
import { useState } from "react";
const BookDataListItem = ({ booksData, book, indexNo, setBooksData }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [currentBook, setCurrentBook] = useState({
    Title: book.Title,
    Author: book.Author,
    Genre: book.Genre,
    PublishedYear: book.PublishedYear,
    ISBN: book.ISBN,
    bookId: book.bookId
  });

  function handleSave() {
    setIsEdit(false);
    const updatedBooksData = booksData.map((item, i) =>
      item.bookId === currentBook.bookId ? currentBook : item
    );
    console.log(updatedBooksData);
    setBooksData(updatedBooksData);
    localStorage.setItem("booksData", JSON.stringify(updatedBooksData));
  }

  function handleDelete() {
    const updatedBooksData = booksData.filter(
      (item) => item.bookId !== currentBook.bookId
    );
    setBooksData(updatedBooksData);
    localStorage.setItem("booksData", JSON.stringify(updatedBooksData));
  }

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="col" className="px-6 py-3">
          {indexNo + 1}
        </th>
        {/* title */}
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
            onChange={(e) =>
              setCurrentBook({ ...currentBook, Title: e.target.value })
            }
            disabled={!isEdit}
            value={currentBook.Title}
          />
        </th>
        {/* title end */}
        {/* Author */}
        <td className="px-6 py-4">
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
            onChange={(e) =>
              setCurrentBook({ ...currentBook, Author: e.target.value })
            }
            disabled={!isEdit}
            value={currentBook.Author}
          />
        </td>
        {/* Author end */}
        {/* genre */}
        <td className="px-6 py-4">
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
            onChange={(e) =>
              setCurrentBook({ ...currentBook, Genre: e.target.value })
            }
            disabled={!isEdit}
            value={currentBook.Genre}
          />
        </td>
        {/* genre end */}
        {/* publishedYear */}
        <td className="px-6 py-4">{currentBook.PublishedYear}</td>
        {/* publishYear */}
        <td className="px-6 py-4">{currentBook.ISBN}</td>
        {/* publishYear end */}
        {/* Action */}
        <td className="px-6 py-4 flex gap-2">
          {/* if edit is true show cancel edit and save edit button else show delete and edit button */}
          {isEdit ? (
            <>
              {/* save button */}
              <div
                className="cursor-pointer"
                onClick={() => {
                  handleSave();
                }}
              >
                <svg
                  className="w-6 h-6 text-green-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {/* save edit button end */}
              {/* cancel edit button */}
              <div
                className="cursor-pointer"
                onClick={() => {
                  setIsEdit(false);
                  setCurrentBook(book);
                }}
              >
                <svg
                  className="w-6 h-6 text-red-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* cancel edit button end */}
            </>
          ) : (
            <>
              {/* edit button */}
              <div
                className="cursor-pointer"
                onClick={() => {
                  setIsEdit(true);
                }}
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                  />
                </svg>
              </div>
              {/* edit button end  */}
              {/* delete button */}
              <div className="cursor-pointer" onClick={() => handleDelete()}>
                <svg
                  className="w-6 h-6 text-red-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {/* delete button end */}
            </>
          )}
        </td>
        {/* action end */}
      </tr>
    </>
  );
};

export default BookDataListItem;
