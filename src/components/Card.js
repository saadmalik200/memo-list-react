import React, { useState } from "react";

const Card = ({ item, i, alltodo, setAllTodo, todo, setTodo, setGetData }) => {
  const [status, setStatus] = useState(false);

  const [input, setInput] = useState(item);

  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleSave = () => {
    console.log("Hello");
    setInput(input);
    setEdit(!edit);
  };

  const handleClick = () => {
    const filter = alltodo.filter((el) => el !== item);
    setAllTodo(filter);
  };

  return (
    <div className="flex justify-between p-2 border-2 border-black my-2 ">
      {edit ? (
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      ) : (
        <p>{input}</p>
      )}

      <div className="flex gap-2">
        {edit ? (
          <button onClick={handleSave} className="border-2">
            Save
          </button>
        ) : (
          <button onClick={handleEdit} className="border-2">
            Edit
          </button>
        )}
        <button
          onClick={() => setStatus(!status)}
          className={`border-2 ${status ? "bg-gray-500" : "bg-red-200"}`}
        >
          {status ? "Completed" : "Pending"}
        </button>
        <button onClick={handleClick} className="border-2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
