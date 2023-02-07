import { useEffect, useState } from "react";
import styled from "styled-components";

const item = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function App() {
  const [isPosition, setIsPosition] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const target1 = document.querySelector(".box1");
      const rect1 = target1.getBoundingClientRect();
      const target2 = document.querySelector(".box2");
      const rect2 = target2.getBoundingClientRect();
      const target3 = document.querySelector(".box3");
      const rect3 = target3.getBoundingClientRect();

      if (rect2.y > 0 && rect3.y > 0) {
        setIsPosition(1);
      } else if (rect1.y < 0 && rect2.y < 0) {
        setIsPosition(2);
      }

      if (rect3.y < 0) {
        setIsPosition(3);
      }
    });
  }, [isPosition]);

  return (
    <Wrap>
      <div className="navi">
        {item.map((item) => {
          return (
            <div
              key={item.id}
              className={`navi__box ${isPosition === item.id ? "active" : ""}`}
            >
              {item.id}
            </div>
          );
        })}
      </div>
      <div className="box box1">1</div>
      <div className="box box2">2</div>
      <div className="box box3">3</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 3px dotted black;
  position: relative;

  .navi {
    border: 1px solid green;
    display: flex;
    justify-content: space-around;
    gap: 1px;
    margin-right: -3px;
    position: sticky;
    top: 0;
  }

  .navi__box {
    border: 1px solid blue;
    display: block;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background-color: #f1f1f1;
    color: #c1c1c1;
    text-align: center;
    font-size: 18px;
    margin: 0;
    padding: 0;
  }

  .navi__box.active {
    border: 1px solid red;
    background-color: #fff;
    color: #000;
    border-top: 2px solid #000;
    display: block;
    height: 80px;
    width: 100%;
    line-height: 80px;
    text-align: center;
    font-size: 18px;
    margin: 0;
    padding: 0;
  }

  .box {
    border: 1px solid orange;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1200px;
  }
`;
