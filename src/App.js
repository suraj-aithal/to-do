import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [ser, setSer] = useState("");

  const addTodo = () => {
    if (ser.trim() !== "") {
      setList([...list, ser.trim()]); // Append new item to the list
      setSer(""); // Clear the input field
    }
  };

  const removeTodo = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full bg-orange-400 py-4 fixed top-0 left-0 right-0 z-10">
        <h1 className="text-3xl font-bold text-white text-center">TO-DO Application</h1>
      </div>

      <div className="max-w-md w-full bg-white  shadow-lg rounded-lg my-[100px] p-4">
        <div className="flex items-center">
          <input
            className="appearance-none bg-transparent border-b border-gray-300 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            value={ser}
            onChange={(e) => setSer(e.target.value)}
            placeholder="Enter your todo"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={addTodo}
          >
            Add
          </button>
        </div>

        {list.length === 0 ? (
          <p className="text-center text-gray-600 mt-4">No todos yet.</p>
        ) : (
          <div className="mt-4">
            {list.map((todo, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-200 rounded-lg px-4 py-2 mb-2"
              >
                <span className="text-gray-800">{todo}</span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeTodo(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
