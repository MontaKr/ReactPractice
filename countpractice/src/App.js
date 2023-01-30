import { useState } from "react";
import styled from "styled-components";

export default function App() {
  const [count, setCount] = useState(1);

  const plusCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <Wrap>
      <div className="boxWrap">
        <div className="boxWrap__counter">
          <div
            onClick={() => {
              minusCount();
            }}
          >
            -
          </div>
          <div>{count}</div>
          <div
            onClick={() => {
              plusCount();
            }}
          >
            +
          </div>
        </div>
        <div>price : {500 * count}</div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .boxWrap {
    display: inline-flex;
    flex-direction: column;
    position: relative;
    border: 1px solid black;
    top: calc(50vh - 100px);
    left: calc(50vw - 100px);

    .boxWrap__counter {
      border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
