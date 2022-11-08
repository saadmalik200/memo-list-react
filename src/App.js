import "./App.css";
import { IoMdAddCircle } from "react-icons/io";

function App() {
  return (
    <div className="flex h-screen items-center justify-center ">
      <div>
        <h1 className="text-[3rem]">My Memo List</h1>
        <h3>My plan for the day!</h3>

        <div className="bg-teal-500 h-[10rem]">
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="flex gap-3 items-center text-[1.5rem]">
          <input
            className="border-2 p-1 border-slate-400"
            type="text"
            placeholder="Add to do "
          />
          <IoMdAddCircle />
        </div>
      </div>
    </div>
  );
}

export default App;
