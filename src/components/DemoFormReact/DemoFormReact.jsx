import React, { useState } from "react";

const DemoFormReact = () => {
  const [value, setValue] = useState({
    name: " ",
    email: " ",
  });

  const handleChange = (e) => {
    const id = e.target.id;
    setValue({ ...value, [id]: e.target.value });
    console.log(value);
  };
  return (
    <div>
      <h2 className="capitalize">Form get data</h2>
      <form>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
            placeholder="pls enter ur name"
            value={value.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
            placeholder="pls enter ur email"
            value={value.email}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default DemoFormReact;
