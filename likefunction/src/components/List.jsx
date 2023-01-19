import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function List() {
  const location = useLocation();

  console.log("location :", location)
  const array = location.state.array;

  const isClick = useSelector((state) => state.CheckLike.isClick);

  return (
    <Wrap>
      <div className="productCard">
        {array.map((content, idx) => {
          return (
            <div key={idx} className="productCard__wrap">
              {isClick.includes(content.id) && (
                <>
                  <img src={content.img} className="productCard__img" />
                  <div className="productCard__name">
                    <div>
                      <h3 className="productCard__title">{content.name}</h3>
                      <div className="productCard__priceWrap">
                        {content.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
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
  overflow: scroll;

  .like {
    position: relative;
    top: 4rem;
    left: 6rem;
  }

  .productCard {
    display: flex;
    position: absolute;
    top: calc(50vh - 120px);
    left: calc(50vw - 180px);
    width: "228px";
    height: "351px";
    padding-right: 8px;
    padding-left: 8px;
    border: solid 1px black;
  }

  .productCard__wrap {
    border: 1px solid grey;
    line-height: 1.428571429;
    background-color: #fff;
  }

  .productCard__img {
    width: 228px;
    height: 228px;
  }

  .productCard__name {
    padding-bottom: 30px;
    position: relative;
    padding: 8px 8px 0 8px;
    min-height: 118px;
    text-align: left;
  }

  .productCard__title {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 2px;
    padding-right: 37px;
    line-height: 1.3;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  .productCard__priceWrap {
    font-size: 18px;
    margin-top: 5px;
    vertical-align: middle;
    margin: 0 0 9px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    text-align: left;
  }

  .productCard__likeWrap {
    position: absolute;
    top: -5px;
    right: 0;
    padding: 0;
    height: 40px;
    line-height: 37px;
    white-space: normal;
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
  }
`;
