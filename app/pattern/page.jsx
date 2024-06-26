import PatternShow from "./PatternShow";

export default function Page() {
  const generatePattern = (N, T) => {
    let pattern = "";

    switch (T) {
      case "T1":
        // Square pattern
        for (let i = 0; i < N; i++) {
          for (let j = 0; j < N; j++) {
            pattern += "* ";
          }
          pattern += "\n";
        }
        break;

      case "T2":
        // Right-angle triangle pattern
        for (let i = 1; i <= N; i++) {
          for (let j = 0; j < i; j++) {
            pattern += "* ";
          }
          pattern += "\n";
        }
        break;

      // Add more cases for different patterns here

      default:
        pattern = "Invalid pattern type";
    }

    return pattern;
  };

  // Example usage:
  const N = 5; // Size of the pattern
  const T = "T2"; // Type of the pattern (e.g., 'T1' for Square, 'T2' for Triangle)
  console.log(generatePattern(N, T));

  return <section>
    <PatternShow />
  </section>;
}
