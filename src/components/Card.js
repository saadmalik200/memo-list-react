import React, { useEffect, useState } from "react";

const Card = ({ item, i, alltodo, setAllTodo, todo, setTodo, setGetData }) => {
  const [status, setStatus] = useState(false);

  const [input, setInput] = useState(item);

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(alltodo));
  }, [alltodo]);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleSave = () => {
    const oldArr = [...alltodo];

    oldArr[i] = input;
    // console.log("Old Arr", oldArr);
    setAllTodo([...oldArr]);
    setInput(input);
    setEdit(!edit);
  };

  const handleDelete = () => {
    const filter = alltodo.filter((el) => el !== item);
    console.log(filter);
    setAllTodo([...filter]);
    // localStorage.setItem("items", JSON.stringify(alltodo));
  };

  return (
    <div className="flex items-center bg-gray-200 w-full justify-between p-2 border-2 border-black my-1 ">
      {edit ? (
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-[12rem]"
        />
      ) : (
        <p>{input}</p>
      )}

      <div className="flex gap-2">
        {edit ? (
          <button onClick={handleSave} className="border-2  border-black p-1">
            Save
          </button>
        ) : (
          <button onClick={handleEdit} className="border-2 border-black p-1">
            Edit
          </button>
        )}
        <button
          onClick={() => setStatus(!status)}
          className={`border-2 ${
            status ? "bg-gray-500" : "bg-red-200"
          } border-black p-1`}
        >
          {status ? "Completed" : "Pending"}
        </button>
        <button onClick={handleDelete} className="border-2 border-black p-1">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
