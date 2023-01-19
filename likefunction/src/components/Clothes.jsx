import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const array = [
  {
    id: "1",
    name: "vest",
    img:
      "https://shopimg.kakaofriendsgolf.com/live/images/2022/9/7/10/918997_1662515279620.png",
    price: "10000"
  },
  {
    id: "2",
    name: "shirts",
    img:
      "https://shopimg.kakaofriendsgolf.com/live/images/2022/8/23/18/551886_1661246483199.png",
    price: "12000"
  },
  {
    id: "3",
    name: "pants",
    img:
      "	https://shopimg.kakaofriendsgolf.com/live/images/2022/8/22/18/18783_1661159105201.png",
    price: "15000"
  }
];

export default function Clothes() {
  const isClick = useSelector((state) => state.CheckLike.isClick);

  const dispatch = useDispatch();

  // change Icon
  const setHide = (id) => {
    dispatch({ type: "False", id });
  };

  const setShow = (id) => {
    dispatch({ type: "True", id });
  };

  console.log(isClick);

  return (
    <Wrap>
      <div className="productCard">
        {array.map((content, idx) => {
          return (
            <div key={idx} className="productCard__wrap">
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
                <div className="productCard__likeWrap">
                  {isClick.includes(content.id) ? (
                    <div
                      onClick={() => {
                        setHide(content.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        setShow(content.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faHome} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link
        state={{ array }}
        to="/like"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <button array={array} className="like">
          like
        </button>
      </Link>
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
