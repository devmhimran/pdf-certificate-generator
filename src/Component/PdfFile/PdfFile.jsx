import React, { useState } from "react";

const PdfFile = () => {
  const [pdfData, setPdfData] = useState({});
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const description = e.target.description.value;

    setPdfData({ name, image, description });
  };
  console.log(pdfData);
  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 w-4/6 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400">
          <input
            type="text"
            class="py-3 px-4 block w-full border focus:outline-none  my-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Enter Name"
            name="name"
          />
          <input
            type="text"
            class="py-3 px-4 block w-full border focus:outline-none  my-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Enter Image URL"
            name="image"
          />
          <textarea
            class="py-3 px-4 block w-full border focus:outline-none mt-2 mb-4 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            rows="3"
            placeholder="Enter Description"
            name="description"
          ></textarea>
          <button
            type="submit"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          >
            Default
          </button>
        </div>
      </form>
    </div>
  );
};

export default PdfFile;
