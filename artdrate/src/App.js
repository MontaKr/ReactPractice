import { Rate } from "antd";
import { useState } from "react";
import styled from "styled-components";

export default function App() {
  const [star, setStar] = useState(0);

  return (
    <Wrap>
      <div className="box">
        <Rate
          onChange={(value) => {
            setStar(value);
          }}
          value={star}
          className="box__star"
        />
        <div>{star}</div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 3px solid black;

  .box {
    border: 1px solid red;
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .box__star {
    border: 1px solid green;
  }
`;
