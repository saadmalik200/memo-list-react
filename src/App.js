import "./App.css";
import { IoMdAddCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [todo, setTodo] = useState("");
  const [alltodo, setAllTodo] = useState([]);

  const [edit, setEdit] = useState(false);

  const [getData, setGetData] = useState("");

  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));

    console.log(`Get Item`);
    if (items) {
      setAllTodo(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(alltodo));
    console.log(`Set Item`);

    return () => {
      console.log("useeffect return runs");
    };
  }, [alltodo]);

  // console.log(items);

  const handleClick = () => {
    if (todo) {
      setAllTodo([...alltodo, todo]);
      setTodo("");
    } else {
      alert("please type something");
    }
  };

  // console.log(getData);
  return (
    <div className="flex  min-w-[30rem] h-screen justify-center items-center bg-[url(https://i.pinimg.com/736x/e6/73/d5/e673d5128169c3efca2a0a8db75a456c.jpg)] bg-no-repeat  bg-top  overflow-scroll">
      <div className="min-w-[20%] flex flex-col gap-5 max-h-full">
        <h1 className="text-indigo-900 text-bold text-[2rem] mb-5 text-center">
          {" "}
          My Memo List
        </h1>
        <h3 className="text-bold text-[1rem] mt-2 text-center text-teal-700">
          My plan for the day!
        </h3>

        <div className="flex ml-7 flex-col text-[1rem] h-[20rem] w-[28rem] overflow-auto gap-5 px-3">
          {alltodo.map((item, i) => (
            <Card
              key={i}
              i={i}
              item={item}
              setAllTodo={setAllTodo}
              alltodo={alltodo}
              setGetData={setGetData}
              // getData={getData}
              setTodo={setTodo}
              todo={todo}
            />
          ))}
        </div>
        <div className="flex ml-[4rem] gap-3 items-center text-[1.5rem]">
          <input
            className="border-2 p-1 border-slate-400"
            type="text"
            placeholder="Add to do "
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <IoMdAddCircle onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
