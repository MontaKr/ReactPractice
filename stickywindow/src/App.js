import styled from "styled-components";

export default function App() {
  return (
    <Wrap>
      <div className="parent">
        <div className="box" />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 2000px;

  .parent {
    position: relative;
    top: 100px;
    height: 1000px;
    border: 1px solid red;
  }

  .box {
    position: sticky;
    top: 10px;
    border: 1px solid black;
    width: 400px;
    height: 400px;
  }
`;
