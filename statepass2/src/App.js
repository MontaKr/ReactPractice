import styled from "styled-components";
import Child from "./Child";
import { useState } from "react";

export default function App() {
  const [word, setWord] = useState("");

  return (
    <Wrap>
      <Child setWord={setWord} />
      {word}
    </Wrap>
  );
}

const Wrap = styled.div``;
