import { useState } from "react";

export default function Child({ setIsNum, isNum, passValue }) {
  const [isValue, setIsValue] = useState("");

  return (
    <>
      <button
        onClick={() => {
          setIsNum(isNum + 1);
        }}
      >
        +
      </button>
      <input
        onChange={(e) => {
          setIsValue(e.target.value);
        }}
        value={isValue}
      ></input>
      <button
        onClick={() => {
          passValue(isValue);
        }}
      >
        send
      </button>
    </>
  );
}
