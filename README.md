Test Live Site: https://wpxpo-three.vercel.app


Pattern Code (Javascript):: 

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

  const N = 5;
  const T = "a";
  console.log(generatePattern(N, T));
