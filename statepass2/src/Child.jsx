import { useState } from "react";
import styled from "styled-components";

export default function Child({ setWord }) {
  const [sendWord, setSendWord] = useState("");

  return (
    <Wrap>
      <input value={sendWord} onChange={(e) => setSendWord(e.target.value)} />
      <button
        onClick={() => {
          setWord(sendWord);
        }}
      >
        send
      </button>
    </Wrap>
  );
}

const Wrap = styled.div``;
