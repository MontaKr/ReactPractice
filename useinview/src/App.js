import { useInView } from "react-intersection-observer";
import styled from "styled-components";

export default function App() {
  const [ref, inView] = useInView();

  return (
    <Wrap>
      <div className="isBoolean">{inView.toString()}</div>
      <div className="check" ref={ref}></div>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 1500px;
  position: absolute;
  background-color: blue;

  .isBoolean {
    position: fixed;
  }

  .check {
    position: relative;
    top: 1000px;
    background-color: red;
    width: 100%;
    height: 100px;
  }
`;
