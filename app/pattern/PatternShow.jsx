"use client";
import { useState } from "react";

export default function PatternShow() {
  const [N, setN] = useState(5); 
  const [T, setT] = useState(""); 
  const [pattern, setPattern] = useState(""); 


  const generatePattern = (N, T) => {
    let pattern = "";


    if (N < 1 || N > 26) {
      return "Invalid size N. N should be between 1 and 26.";
    }

    if (T === "") {
      return "Invalid pattern type";
    } else if (T === "1") {
      for (let i = 0; i < N; i++) {
        for (let j = 1; j <= N; j++) {
          pattern += j;
        }
        pattern += "\n";
      }
    } else if (T === "a") {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          pattern += String.fromCharCode(97 + j);
        }
        pattern += "\n";
      }
    }
    return pattern;
  };


  const handleGeneratePattern = () => {
    const generatedPattern = generatePattern(N, T);
    setPattern(generatedPattern);
  };

  return (
    <section className="p-5">
      <h1 className="text-xl font-bold mb-4">Pattern Generator</h1>
      <div className="mb-4">
        <label className="block mb-2">
          Enter the size (N):
          <input
            type="number"
            value={N}
            onChange={(e) => setN(parseInt(e.target.value, 10))}
            className="border p-2 rounded-md w-full"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Select the pattern type (T):
          <input
            type="text"
            value={T}
            onChange={(e) => setT(e.target.value)}
            className="border p-2 rounded-md w-full"
          />
        </label>
      </div>
      <button
        onClick={handleGeneratePattern}
        className="bg-blue-500 text-white px-5 py-2 rounded-md"
      >
        Generate Pattern
      </button>
      <div className="mt-4">
        <pre className="bg-gray-100 p-4 rounded-md whitespace-pre-wrap">
          {pattern}
        </pre>
      </div>
    </section>
  );
}


// a b c d e 
// b       d
// c       c
// d       b
// e d c b a


// 1 2 3 4 5
// 2       4
// 3       3
// 4       2
// 5 4 3 2 1


// i want, this type of pattern

