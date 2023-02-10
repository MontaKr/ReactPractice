import { useEffect, useState } from "react";
import styled from "styled-components";

export default function App() {
  const [isCSS, setIsCSS] = useState(false);
  useEffect(() => {
    setIsCSS(true);
  }, []);

  return (
    <Wrap isCSS={isCSS}>
      <div className="box">
        <div className="box__text">
          <span className="box__span">TEXT</span>
        </div>
        <div className="box__text">
          <span className="box__span1">TEXT</span>
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 4px solid black;
  width: 100vw;
  height: 100vh;

  .box {
    border: 1px solid red;
    position: relative;
    top: 30vh;
    background-color: black;
  }
  .box__text {
    border: 1px solid green;
    color: #fff;
    font-size: 74px;
    line-height: 102px;
    font-weight: 700;
    height: 102px;
    overflow: hidden;
    display: block;
  }

  .box__span {
    transform: translateY(0);
    transition: 1000ms;
    transition-delay: 0ms;
    display: block;
    overflow: hidden;
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    margin-block-start: ${(props) => (props.isCSS ? "0" : "1em")};
    margin-block-end: ${(props) => (props.isCSS ? "0" : "1em")};
  }

  .box__span1 {
    transform: translateY(0);
    transition: 1000ms;
    transition-delay: 259ms;
    display: block;
    overflow: hidden;
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    margin-block-start: ${(props) => (props.isCSS ? "0" : "1em")};
    margin-block-end: ${(props) => (props.isCSS ? "0" : "1em")};
  }
`;
