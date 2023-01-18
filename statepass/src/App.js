import styled from "styled-components";
import Child from "./Child";
import { useState } from "react";

export default function App() {
  const [isNum, setIsNum] = useState(0);
  const [isPassed, setIsPassed] = useState("");

  const passValue = (vari) => {
    setIsPassed(vari);
  };

  return (
    <Wrap>
      <div>숫자 {isNum}</div>
      <div>{isPassed}</div>
      <Child passValue={passValue} setIsNum={setIsNum} isNum={isNum} />
    </Wrap>
  );
}

const Wrap = styled.div``;
