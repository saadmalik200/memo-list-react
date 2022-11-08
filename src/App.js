import "./App.css";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [todo, setTodo] = useState("");
  const [alltodo, setAllTodo] = useState([]);

  const [edit, setEdit] = useState(false);

  const [getData, setGetData] = useState("");

  console.log(alltodo);
  console.log(getData);

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
    <div className="flex h-screen items-center justify-center ">
      <div>
        <h1 className="text-[3rem]">My Memo List</h1>
        <h3>My plan for the day!</h3>

        <div className="bg-teal-500 h-[10rem]">
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
        <div className="flex gap-3 items-center text-[1.5rem]">
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
