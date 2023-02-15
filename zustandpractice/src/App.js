import styled from "styled-components";
import useStore from "./Zustand/index";

export default function App() {
  const { count, increase, zero } = useStore();
  return (
    <Wrap>
      <div>{count}</div>
      <button
        onClick={() => {
          increase();
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          zero();
        }}
      >
        제거
      </button>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 3px solid black;
`;
