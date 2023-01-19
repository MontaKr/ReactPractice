import styled from "styled-components";
import dummy from "../database/data.json";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cards() {
  // json to state
  const [data, setData] = useState(dummy.products);

  return (
    <Wrap>
      <div className="cardWrap">
        {data.map((item) => {
          return (
            <Link
              to={`/product/${item.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div key={item.id} className="card">
                <div className="card__imgWrap">
                  <img className="card__img" alt="product" src={item.img} />
                </div>
                <div className="card__nameWrap">
                  <div className="card__name">{item.name}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  overflow: scroll;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .cardWrap {
    border: 1px solid black;
    display: inline-flex;
    flex-direction: column;
    position: relative;
    top: calc(50vh - 100px);
    left: calc(50vw - 100px);
  }

  .card {
    border: 1px solid red;
    display: inline-flex;
    flex-direction: column;
  }

  .card__imgWrap {
    border: 1px solid green;
    width: 5rem;
    height: 5rem;
  }

  .card__img {
    width: 5rem;
    height: 5rem;
  }

  .card__nameWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid orange;
    box-sizing: border-box;
  }

  .card__name {
    display: flex;
  }
`;
