import { Switch } from "antd";
import { useState } from "react";
import styled from "styled-components";

export default function App() {
  const [isChecked, setIsChecked] = useState(null);
  console.log(isChecked);

  return (
    <Wrap isChecked={isChecked}>
      <div className="switch">
        <Switch
          onClick={() => {
            setIsChecked(!isChecked);
          }}
          checked={isChecked}
          size="big"
          className="switch__switch"
        />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 3px solid black;
  background: ${(props) => (props.isChecked ? "black" : "white")};
    border: 1px solid red;
    height: 10rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .switch__switch {
    border: 1px solid green;
  }

  .switch__check {
    border: 1px solid blue;
    width: 5rem;
    height: 5rem;
  }
`;
