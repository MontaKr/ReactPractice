import styled from "styled-components";

export default function App() {
  return (
    <Wrap>
      <div className="box">
        <h2 className="box__h2">
          <span className="box__h2--span">다채로움,</span>
          &nbsp;운동과 함께
        </h2>
        <div className="box__div">
          <div className="box__gradient" />
          <p className="box__p">
            <span className="box__p--span">올바른 자세</span>
            <span className="box__p--span">외적 자신감</span>
            <span className="box__p--span">목표 설정</span>
            <span className="box__p--span">나보다 더 나 답게</span>
            <span className="box__p--span">눈바디</span>
            <span className="box__p--span">동기부여</span>
            <span className="box__p--span">할 수 있어</span>
          </p>
          <p>
            <span className="box__p--span">나를 움직이는</span>
            <span className="box__p--black">
              <span className="box__yellow" />또 하나의 나
            </span>
            <span className="box__p--span">내면의 가치</span>
            <span className="box__p--span">활기찬</span>
            <span className="box__p--span">건강한 습관</span>
            <span className="box__p--span">더 자유롭게</span>
          </p>
          <p>
            <span className="box__p--span">다이어트</span>
            <span className="box__p--span">비대면 운동</span>
            <span className="box__p--span">엔돌핀</span>
            <span className="box__p--span">라이프 스타일</span>
            <span className="box__p--span">자기 표현</span>
            <span className="box__p--span">목표 설정</span>
            <span className="box__p--span">홈트레이닝</span>
          </p>
          <p>
            <span className="box__p--span">새로운 콘텐츠</span>
            <span className="box__p--span">맞춤 코칭</span>
            <span className="box__p--span">취향 저격</span>
            <span className="box__p--span">작은 성취</span>
            <span className="box__p--black">
              <span className="box__yellow" />
              자존감 높이기
            </span>
            <span className="box__p--span">나를 위한</span>
            <span className="box__p--span">챌린지</span>
          </p>
          <div className="box__gradient--left" />
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  .box {
    display: flex;
    align-items: flex-start;
    position: relative;
    justify-content: center;
    box-sizing: border-box;
    width: 80%;
    height: 100%;
    margin: auto;
    font-family: "Spoqa Han Sans Neo";
    font-weight: normal;
    font-size: 16px;
    flex-direction: column;
  }

  .box__h2 {
    font-size: 50px;
    line-height: 43px;
    color: black;
    margin-bottom: 74px;
    font-weight: normal;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .box__h2--span {
    font-weight: 700;
  }

  .box__div {
    position: relative;
    font-family: "Spoqa Han Sans Neo";
    font-weight: 500;
    font-size: 16px;
  }

  .box__gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 87px;
    height: 100%;
    background: linear-gradient(
      to right,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 97.69%
    );
    z-index: 15;
  }

  .box__gradient--left {
    position: absolute;
    top: 0;
    right: 0;
    width: 87px;
    height: 100%;
    background: linear-gradient(
      to left,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 97.69%
    );
    z-index: 15;
  }

  .box__p {
    line-height: 50px;
    white-space: nowrap;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family: "Spoqa Han Sans Neo";
    font-weight: 500;
  }

  .box__p--span {
    font-size: 30px;
    line-height: 50px;
    color: #717883;
    opacity: 0.5;
    font-family: "Spoqa Han Sans Neo";
    font-weight: 500;
    margin-left: 24px;
  }

  .box__p--black {
    position: relative;
    display: inline-block;
    width: 235px;
    height: 90px;
    line-height: 90px;
    font-family: "Spoqa Han Sans Neo";
    font-weight: 700;
    opacity: 1;
    color: #1e1e1e;
    text-align: center;
    margin-left: 24px;
    font-size: 30px;
  }

  .box__yellow {
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #ffdc00;
    border-radius: 85px;
    font-size: 30px;
    line-height: 50px;
    color: #717883;
  }
`;
