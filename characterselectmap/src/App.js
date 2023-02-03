import { useState } from "react";
import styled from "styled-components";
import dummy from "./database/DB.json";

export default function App() {
  const [data] = useState(dummy.products);

  const [hoverCharacter, setHoverCharacter] = useState(null);
  const [clickCharacter, setClickCharacter] = useState("1");

  return (
    <Wrap>
      <div className="characterList">
        <div className="word">
          <h2 className="word__font">Like Pick!</h2>
        </div>
        <div className="list">
          <ul className="list__ul">
            {data.map((item) => {
              return (
                <div key={item.id} className="list__box">
                  <Card
                    hoverCharacter={hoverCharacter}
                    setHoverCharacter={setHoverCharacter}
                    clickCharacter={clickCharacter}
                    setClickCharacter={setClickCharacter}
                    key={item.id}
                    item={item}
                  />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </Wrap>
  );
}

function Card({
  item,
  hoverCharacter,
  setHoverCharacter,
  clickCharacter,
  setClickCharacter,
}) {
  return (
    <CardWrap item={item}>
      <div
        onMouseEnter={() => {
          setHoverCharacter(item.id);
        }}
        onMouseLeave={() => {
          setHoverCharacter(null);
        }}
        onClick={() => {
          setClickCharacter(item.id);
        }}
        className={`list__wrap ${
          hoverCharacter === item.id || clickCharacter === item.id
            ? "active"
            : ""
        }`}
      >
        <div
          className={`list__img ${
            hoverCharacter === item.id || clickCharacter === item.id
              ? "active"
              : ""
          }`}
        />
        {item.nameKr}
      </div>
    </CardWrap>
  );
}

const Wrap = styled.div`
  position: relative;
  top: calc(50vh - 100px);
  width: 1200px;
  display: inline-flex;

  .characterList {
  }

  .word {
    margin: 0 auto;
    width: 1200px;
  }

  .word__font {
    font-family: "SFCompactDisplay-Bold", sans-serif;
    font-weight: bold;
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
  }

  .list {
    margin: 0 auto;
    width: 1200px;
    padding-bottom: 20px;
  }

  .list__ul {
    display: inline-flex;
    list-style: none;
  }

  .list__box {
    margin: 0 9px;
    text-align: center;
    font-size: 17px;
  }
`;

const CardWrap = styled.div`
  cursor: pointer;

  .list__wrap {
    color: #999;
    font-size: 13px;
    display: inline-block;
    text-align: center;
  }

  .list__wrap.active {
    color: #333;
    font-size: 13px;
    display: inline-block;
    text-align: center;
  }

  .list__img {
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
    background-size: 100%;
    margin-bottom: 5px;
    background-position: 0 ${(props) => props.item.greyed}%;
  }

  .list__img.active {
    background-image: url(https://www.kakaofriendsgolf.com/img/v3_img_sprites_friends@3x.png);
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
    background-size: 100%;
    margin-bottom: 5px;
    background-position: 0 ${(props) => props.item.blacked}%;
  }
`;
