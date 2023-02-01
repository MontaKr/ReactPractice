import { useState } from "react";
import styled from "styled-components";

export default function App() {
  // declare hover state
  const [choonsik, setChoonsik] = useState(true);
  const [ryan, setRyan] = useState(false);
  const [apeech, setApeech] = useState(false);
  const [neo, setNeo] = useState(false);
  const [prodo, setProdo] = useState(false);
  const [tube, setTube] = useState(false);
  const [mooji, setMooji] = useState(false);
  const [con, setCon] = useState(false);
  const [jayz, setJayz] = useState(false);

  // declare click state
  const [isChoonsik, setIsChoonsik] = useState(true);
  const [isRyan, setIsRyan] = useState(false);
  const [isApeech, setIsApeech] = useState(false);
  const [isNeo, setIsNeo] = useState(false);
  const [isProdo, setIsProdo] = useState(false);
  const [isTube, setIsTube] = useState(false);
  const [isMooji, setIsMooji] = useState(false);
  const [isCon, setIsCon] = useState(false);
  const [isJayz, setIsJayz] = useState(false);

  // make click state true
  const clickChoonsik = () => {
    setIsChoonsik(true);
    setIsRyan(false);
    setIsApeech(false);
    setIsNeo(false);
    setIsProdo(false);
    setIsTube(false);
    setIsMooji(false);
    setIsCon(false);
    setIsJayz(false);
  };

  const clickRyan = () => {
    setIsChoonsik(false);
    setIsRyan(true);
    setIsApeech(false);
    setIsNeo(false);
    setIsProdo(false);
    setIsTube(false);
    setIsMooji(false);
    setIsCon(false);
    setIsJayz(false);
  };

  const clickApeech = () => {
    setIsChoonsik(false);
    setIsRyan(false);
    setIsApeech(true);
    setIsNeo(false);
    setIsProdo(false);
    setIsTube(false);
    setIsMooji(false);
    setIsCon(false);
    setIsJayz(false);
  };

  const clickNeo = () => {
    setIsChoonsik(false);
    setIsRyan(false);
    setIsApeech(false);
    setIsNeo(true);
    setIsProdo(false);
    setIsTube(false);
    setIsMooji(false);
    setIsCon(false);
    setIsJayz(false);
  };

  const clickProdo = () => {
    setIsChoonsik(false);
    setIsRyan(false);
    setIsApeech(false);
    setIsNeo(false);
    setIsProdo(true);
    setIsTube(false);
    setIsMooji(false);
    setIsCon(false);
    setIsJayz(false);
  };

  const clickTube = () => {
    setIsChoonsik(false);
    setIsRyan(false);
    setIsApeech(false);
    setIsNeo(false);
    setIsProdo(false);
    setIsTube(true);
    setIsMooji(false);
    setIsCon(false);
    setIsJayz(false);
  };

  const clickMooji = () => {
    setIsChoonsik(false);
    setIsRyan(false);
    setIsApeech(false);
    setIsNeo(false);
    setIsProdo(false);
    setIsTube(false);
    setIsMooji(true);
    setIsCon(false);
    setIsJayz(false);
  };

  const clickCon = () => {
    setIsChoonsik(false);
    setIsRyan(false);
    setIsApeech(false);
    setIsNeo(false);
    setIsProdo(false);
    setIsTube(false);
    setIsMooji(false);
    setIsCon(true);
    setIsJayz(false);
  };

  const clikcJayz = () => {
    setIsChoonsik(false);
    setIsRyan(false);
    setIsApeech(false);
    setIsNeo(false);
    setIsProdo(false);
    setIsTube(false);
    setIsMooji(false);
    setIsCon(false);
    setIsJayz(true);
  };

  // make hover state true
  const trueChoonsik = () => {
    setChoonsik(true);
  };

  const trueRyan = () => {
    setRyan(true);
  };

  const trueApeech = () => {
    setApeech(true);
  };

  const trueNeo = () => {
    setNeo(true);
  };

  const trueProdo = () => {
    setProdo(true);
  };

  const trueTube = () => {
    setTube(true);
  };

  const trueCon = () => {
    setCon(true);
  };

  const trueMooji = () => {
    setMooji(true);
  };

  const trueJayz = () => {
    setJayz(true);
  };

  // make hover state false
  const falseChoonsik = () => {
    setChoonsik(false);
  };

  const falseRyan = () => {
    setRyan(false);
  };

  const falseApeech = () => {
    setApeech(false);
  };

  const falseNeo = () => {
    setNeo(false);
  };

  const falseProdo = () => {
    setProdo(false);
  };

  const falseTube = () => {
    setTube(false);
  };

  const falseCon = () => {
    setCon(false);
  };

  const falseMooji = () => {
    setMooji(false);
  };

  const falseJayz = () => {
    setJayz(false);
  };
  return (
    <Wrap
      choonsik={choonsik}
      ryan={ryan}
      apeach={apeech}
      neo={neo}
      prodo={prodo}
      tube={tube}
      mooji={mooji}
      con={con}
      jayz={jayz}
      isChoonsik={isChoonsik}
      isRyan={isRyan}
      isApeech={isApeech}
      isNeo={isNeo}
      isProdo={isProdo}
      isTube={isTube}
      isMooji={isMooji}
      isCon={isCon}
      isJayz={isJayz}
    >
      <div className="characterWrap">
        <ul className="characterWrap__list">
          <li className="characterWrap__card">
            <div
              onMouseEnter={() => {
                trueChoonsik();
              }}
              onMouseLeave={() => {
                falseChoonsik();
              }}
              onClick={() => {
                clickChoonsik();
              }}
              className={`characterWrap__choonsik ${
                choonsik || isChoonsik ? "active" : ""
              }`}
            >
              <div
                className={`choonsik ${choonsik || isChoonsik ? "active" : ""}`}
              />
              춘식이
            </div>
          </li>
          <li className="characterWrap__card">
            <div
              onMouseEnter={() => {
                trueRyan();
              }}
              onMouseLeave={() => {
                falseRyan();
              }}
              onClick={() => {
                clickRyan();
              }}
              className={`characterWrap__ryan ${
                ryan || isRyan ? "active" : ""
              }`}
            >
              <div className={`ryan ${ryan || isRyan ? "active" : ""}`} />
              라이언
            </div>
          </li>
          <li className="characterWrap__card">
            <div
              onMouseEnter={() => {
                trueApeech();
              }}
              onMouseLeave={() => {
                falseApeech();
              }}
              onClick={() => {
                clickApeech();
              }}
              className={`characterWrap__apeach ${
                apeech || isApeech ? "active" : ""
              }`}
            >
              <div className={`apeach ${apeech || isApeech ? "active" : ""}`} />
              어피치
            </div>
          </li>
          <li className="characterWrap__card">
            <div
              onMouseEnter={() => {
                trueNeo();
              }}
              onMouseLeave={() => {
                falseNeo();
              }}
              onClick={() => {
                clickNeo();
              }}
              className={`characterWrap__neo ${neo || isNeo ? "active" : ""}`}
            >
              <div className={`neo ${neo || isNeo ? "active" : ""}`} />
              네오
            </div>
          </li>
          <li className="characterWrap__card">
            <div
              onMouseEnter={() => {
                trueProdo();
              }}
              onMouseLeave={() => {
                falseProdo();
              }}
              onClick={() => {
                clickProdo();
              }}
              className={`characterWrap__prodo ${
                prodo || isProdo ? "active" : ""
              }`}
            >
              <div className={`prodo ${prodo || isProdo ? "active" : ""}`} />
              프로도
            </div>
          </li>
          <li className="characterWrap__card">
            <div
              onMouseEnter={() => {
                trueTube();
              }}
              onMouseLeave={() => {
                falseTube();
              }}
              onClick={() => {
                clickTube();
              }}
              className={`characterWrap__tube ${
                tube || isTube ? "active" : ""
              }`}
            >
              <div className={`tube ${tube || isTube ? "active" : ""}`} />
              튜브
            </div>
          </li>
          <li className="characterWrap__card">
            <div
              onMouseEnter={() => {
                trueMooji();
              }}
              onMouseLeave={() => {
                falseMooji();
              }}
              onClick={() => {
                clickMooji();
              }}
              className={`characterWrap__mooji ${
                mooji || isMooji ? "active" : ""
              }`}
            >
              <div className={`mooji ${mooji || isMooji ? "active" : ""}`} />
              무지
            </div>
          </li>
          <li className="characterWrap__card">
            <div
              onMouseEnter={() => {
                trueCon();
              }}
              onMouseLeave={() => {
                falseCon();
              }}
              onClick={() => {
                clickCon();
              }}
              className={`characterWrap__con ${con || isCon ? "active" : ""}`}
            >
              <div className={`con ${con || isCon ? "active" : ""}`} />콘
            </div>
          </li>
          <li className="characterWrap__card">
            <div
              onMouseEnter={() => {
                trueJayz();
              }}
              onMouseLeave={() => {
                falseJayz();
              }}
              onClick={() => {
                clikcJayz();
              }}
              className={`characterWrap__jayz ${
                jayz || isJayz ? "active" : ""
              }`}
            >
              <div className={`jayz ${jayz || isJayz ? "active" : ""}`} />
              제이지
            </div>
          </li>
        </ul>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  width: 1000px;
  top: calc(50vh - 100px);

  .characterWrap {
    padding-bottom: 20px;
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }

  .characterWrap__list {
    display: inline-flex;
    list-style: none;
  }

  .characterWrap__card {
    margin: 0 9px;
    text-align: center;
    float: left;
  }

  .characterWrap__choonsik {
    color: #999;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__choonsik.active {
    color: #333;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__ryan {
    color: #999;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__ryan.active {
    color: #333;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__apeach {
    color: #999;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__apeach.active {
    color: #333;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__neo {
    color: #999;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__neo.active {
    color: #333;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__prodo {
    color: #999;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__prodo.active {
    color: #333;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__tube {
    color: #999;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__tube.active {
    color: #333;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__mooji {
    color: #999;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__mooji.active {
    color: #333;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__con {
    color: #999;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__con.active {
    color: #333;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__jayz {
    color: #999;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .characterWrap__jayz.active {
    color: #333;
    font-size: 13px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .choonsik {
    background-position: 0 17.647059%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .choonsik.active {
    background-position: 0 11.764706%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .ryan {
    background-position: 0 88.235295%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .ryan.active {
    background-position: 0 82.352941%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .apeach {
    background-position: 0 5.882353%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .apeach.active {
    background-position: 0 0%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .neo {
    background-position: 0 76.470588%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .neo.active {
    background-position: 0 70.588235%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .prodo {
    background-position: 0 41.176471%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .prodo.active {
    background-position: 0 35.294118%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .tube {
    background-position: 0 100%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .tube.active {
    background-position: 0 94.117647%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .mooji {
    background-position: 0 64.705882%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .mooji.active {
    background-position: 0 58.823529%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .con {
    background-position: 0 29.411765%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .con.active {
    background-position: 0 23.529412%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .jayz {
    background-position: 0 52.941176%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }

  .jayz.active {
    background-position: 0 47.058824%;
    background-size: 100%;
    display: block;
    transition: hover 0.2s;
    margin-bottom: 5px;
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
  }
`;
