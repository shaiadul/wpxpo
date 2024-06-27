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

    if (T === "1") {
      for (let i = 1; i <= N; i++) {
        pattern += i + " ";
      }
      pattern += "\n";

      for (let i = 2; i < N; i++) {
        pattern += i;
        for (let s = 0; s < 2 * N - 3; s++) {
          pattern += " ";
        }
        pattern += N - i + 1 + "\n";
      }

      for (let k = N; k > 0; k--) {
        pattern += k + " ";
      }
    } else if (T === "a") {
      for (let i = 0; i < N; i++) {
        pattern += String.fromCharCode(97 + i) + " ";
      }
      pattern += "\n";

      for (let i = 1; i < N - 1; i++) {
        pattern += String.fromCharCode(97 + i) + " ";
        for (let s = 0; s < N - 2; s++) {
          pattern += "  ";
        }
        pattern += String.fromCharCode(97 + N - i - 1) + "\n";
      }

      for (let i = N - 1; i >= 0; i--) {
        pattern += String.fromCharCode(97 + i) + " ";
      }
    } else {
      return "Invalid pattern type. Use 'Number' or 'Alphabet'.";
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
