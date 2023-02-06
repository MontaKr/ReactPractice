import { useState, useEffect } from "react";
import styled from "styled-components";

export default function App() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 0 ? setIsScroll(true) : setIsScroll(false);
    });
  }, []);

  const toTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const toBot = () => {
    window.scrollTo({
      top: 5000,
    });
  };

  return (
    <Wrap>
      <div className="wrapbox">
        <div className={`box ${isScroll ? "active" : ""}`}>
          <div
            onClick={() => {
              toTop();
            }}
            className="box__top"
          >
            TOP
          </div>
          <div
            onClick={() => {
              toBot();
            }}
            className="box__bot"
          >
            BOTTOM
          </div>
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 1px solid black;
  width: 800px;
  height: 2000px;

  .wrapbox {
    border: 1px solid green;
    width: 100%;
    height: 80%;
    position: relative;
  }

  .box {
    border: 1px solid red;
    position: fixed;
    right: 25px;
    bottom: 5px;
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;
    transition: opacity 0.7s ease;
    opacity: 0;
    visibility: hidden;
  }

  .box.active {
    border: 1px solid red;
    position: fixed;
    right: 25px;
    bottom: 5px;
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;
    opacity: 1;
    visibility: visible;
  }

  .box__top {
    text-align: center;
    border: 1px solid blue;
  }

  .box__bot {
    border: 1px solid orange;
  }
`;
