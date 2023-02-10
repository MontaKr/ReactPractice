import styled from "styled-components";

export default function App() {
  return (
    <Wrap>
      <div className="box">
        <div className="box__button">
          <img alt="con" src="https://www.friendsscreen.kr//img/img_con.png" />
          <br />
          문의하기
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 4px solid black;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    border: 1px solid red;
    /* position: relative; */
    width: 50vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box__button {
    border: 1px solid green;
    background: #3e454b;
    border-radius: 50%;
    overflow: hidden;
    width: 50%;
    height: 50%;
    text-align: center;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    animation: upTodown 0.5s ease-in-out alternate infinite;
    box-sizing: border-box;
  }

  @keyframes upTodown {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-5px);
    }
  }
`;
