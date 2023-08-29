const ALL_KEYS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h ", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

function Keyboard() {
  return (
    <div className="keyboard mt-6 flex flex-col gap-2 items-center select-none">
      {ALL_KEYS.map((row, rowId) => (
        <div
          key={rowId}
          className="row flex gap-1.5 text-xl sm:text-2xl font-semibold"
        >
          {row.map((key, keyId) => (
            <div
              key={keyId}
              className="rounded uppercase bg-gray-200 w-8 h-10 sm:w-10 sm:h-14 flex items-center justify-center active:bg-gray-300"
            >
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
