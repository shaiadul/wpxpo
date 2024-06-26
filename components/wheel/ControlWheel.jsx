"use client";
import { useState } from "react";
import SpinnerWheel from "./SpinnerWheel";

export default function ControlWheel() {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState("");

  const addName = () => {
    setNames([...names, newName]);
    setNewName("");
  };

  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="my-10">
        <h1 className="font-semibold text-sm">Spinner Wheel</h1>
        <div className="my-5">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter a name"
            className="border border-gray-300 rounded p-2"
          />
          <button
          className="bg-blue-500 text-white px-3 py-2 rounded-md ml-2"
           onClick={addName}>Add Name</button>
        </div>
        {names.length > 0 && <SpinnerWheel names={names} />}
      </div>
    </div>
  );
}
