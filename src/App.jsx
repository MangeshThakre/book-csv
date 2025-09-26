import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import DataTable from "./components/DataTable";
import { faker } from "@faker-js/faker";

function App() {
  const [booksData, setBooksData] = useState([]);

  const handleDemoData = () => {
    function demoData() {
      return {
        bookId: faker.string.uuid(),
        Title: faker.book.author(), // 'William Shakespeare',
        Author: faker.book.format(), // 'Hardcover',
        Genre: faker.book.genre(), // 'Fantasy',
        PublishedYear: faker.date.past().getFullYear().toString(),
        ISBN: faker.commerce.isbn()
      };
    }
    const data = faker.helpers.multiple(demoData, {
      count: 10
    });
    setBooksData(data);
    localStorage.setItem("booksData", JSON.stringify(data));
    return data;
  };

  useEffect(() => {
    const data = localStorage.getItem("booksData");
    if (data) {
      setBooksData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="w-full h-[100vh] bg-blue-50 overflow-y-scroll">
      {/* nav bar */}
      <nav className="w-full h-[90px] bg-blue-200 shadow-l  sticky top-0"></nav>
      {/* navbar end*/}

      {booksData.length > 0 ? (
        <>
          {/* select csv file button */}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              localStorage.removeItem("BooksData");
              setBooksData([]);
            }}
          >
            select file
          </button>
          {/* select csv file button end */}
          {/* data table */}
          <DataTable booksData={booksData} setBooksData={setBooksData} />
        </>
      ) : (
        <div className="w-full p-4 h flex flex-col justify-center items-center gap-4">
          <p className="text-black">No Data</p>
          <div className="">
            <input
              type="file"
              accept="csv"
              className="text-white mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            />

            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => {
                handleDemoData();
              }}
            >
              demo Data
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
