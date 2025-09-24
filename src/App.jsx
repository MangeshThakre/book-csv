import React from "react";
import { useState } from "react";
import "./App.css";
import DemoDataList from "./components/DemoDataList";
import { faker } from "@faker-js/faker";

function App() {
  const [demoData, setDemoData] = useState([]);

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
    return data;
  };

  return (
    <div className="w-full h-[100vh] bg-blue-50">
      {/* nav bar */}
      <nav className="w-full h-[90px] bg-blue-200 shadow-l"> </nav>
      {/* navbar */}

      {demoData.length > 0 ? (
        <DemoDataList demoData={demoData} />
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
                setDemoData(handleDemoData());
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
