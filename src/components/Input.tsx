function Input() {
  const word = "test";
  const guessedLetters = ["t", "s", "g"];
  return (
    <div className="flex mt-6 gap-4 text-5xl uppercase font-semibold select-none">
      {word.split("").map((letter, idx) => (
        <span
          key={idx}
          className={`border-[2px] w-16 h-16 flex items-center justify-center ${
            guessedLetters.includes(letter)
              ? "border-gray-800"
              : "border-gray-200"
          }`}
        >
          <span
            className={`${
              guessedLetters.includes(letter) ? "visible" : "invisible"
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default Input;
