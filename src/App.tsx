import { useState } from "react";
import allWords from "./data/word-list.json";
import Drawing from "./components/Drawing";
import Input from "./components/Input";
import Keyboard from "./components/Keyboard";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

function App() {
  const [wordToGuess, setWordToGuess] = useState(
    () => allWords[Math.floor(Math.random() * allWords.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className="text-gray-800 max-w-2xl flex flex-col gap-4 items-center mx-auto h-[100dvh]">
      <header className="py-3 border-b w-full px-6 text-center font-serif font-bold uppercase text-xl">
        Hangman
      </header>
      {/* <div className="flex items-center justify-center relative rounded-lg bg-blue-600 py-2 w-96 text-center my-4 text-white">
        <span className="message">You Win!</span>
        <ArrowPathIcon className="h-5 absolute right-4" />
      </div> */}
      <Drawing />
      <Input />
      <Keyboard />
    </div>
  );
}

export default App;
