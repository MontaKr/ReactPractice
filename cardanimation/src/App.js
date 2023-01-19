import styled from "styled-components";
import { useState } from "react";

export default function App() {
  const [isHover, setHover] = useState(false);

  return (
    <Wrap>
      <div
        className="windowWrap"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <div className="window">
          <div className="windowNum">1</div>
          <img
            className={`windowImg ${isHover ? "hovered" : ""}`}
            src="https://shopimg.kakaofriendsgolf.com/live/images/2021/10/21/18/767719_1634807383812.png"
          />
          {isHover && <div className="windowHover">price</div>}
          {/* <div className="windowHover">price</div> */}
        </div>
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

  .windowWrap {
    position: absolute;
    top: calc(50vh - 120px);
    left: calc(50vw - 100px);
    border-radius: 10px;
  }

  .window {
    background-color: grey;
    border: 1px black solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 200px;
    height: 300px;
    background: #f7f7f7;
    overflow: hidden;
  }

  .windowNum {
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
  }

  .windowHover {
    position: absolute;
    top: 230px;
    border: 1px red solid;
    width: 200px;
    height: 70px;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadein 0.3s ease;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  .windowImg {
    border: 1px solid green;
    display: block;
    position: relative;
    top: 0px;
    width: 228px;
    height: 228px;
    border-radius: 10px;
    transition: top 0.3s ease;
  }

  .windowImg.hovered {
    display: block;
    position: relative;
    top: -37px;
  }
`;
