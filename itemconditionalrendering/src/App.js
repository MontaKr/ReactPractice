import styled from "styled-components";
import DB from "./database/DB.json";

export default function App() {
  return (
    <Wrap>
      <ul className="itemList">
        {DB.products.map((item) => {
          return (
            <li key={item.id} className="itemList__itemWrap">
              <div className="itemList__imgWrap">
                <img className="itemList_img" alt="img" src={item.img} />
              </div>
              <div className="itemList__textWrap">
                <div className="itemList__texBox">
                  <h3 className="itemList__name">{item.name}</h3>
                  <p className="itemList__won">
                    <strong className="itemList__salePrice">
                      {item.salePrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </strong>
                    원
                    <del className="itemList__delete">
                      {item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </del>
                  </p>
                </div>
              </div>
              <div className="itemList__LabelWrap">
                {item.isSale && item.isSoldOut ? (
                  <span className="itemList__soldout">soldout</span>
                ) : item.isSale ? (
                  <span className="itemList__sale">sale</span>
                ) : (
                  ""
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  overflow: scroll;

  .itemList {
    display: flex;
    border: 1px solid red;
    list-style: none;
  }

  .itemList__itemWrap {
    border: 1px solid green;
    position: relative;
    padding-right: 7px;
    padding-left: 8px;
  }

  .itemList__imgWrap {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .itemList__imgWrap::before {
    content: " ";
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.02);
    border-radius: 10px;
  }

  .itemList_img {
    width: 288.75px !important;
    height: 288.75px !important;
  }

  .itemList__textWrap {
    position: relative;
    padding: 8px 8px 0 8px;
    text-align: left;
  }

  .itemList__texBox {
    text-align: left;
  }

  .itemList__name {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 2px;
    padding-right: 37px;
    line-height: 1.3;
  }

  .itemList__won {
    font-size: 18px;
    margin-top: 5px;
    margin: 0 0 9px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .itemList__salePrice {
    font-size: 20px;
    font-family: "SFCompactDisplay", sans-serif;
    font-weight: normal;
    vertical-align: middle;
    text-align: left;
  }

  .itemList__delete {
    font-size: 18px;
    font-family: "SFCompactDisplay", sans-serif;
    color: #ccc;
    vertical-align: middle;
    line-height: 1.428571429;
  }

  .itemList__LabelWrap {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  .itemList__sale {
    display: inline-block;
    color: #fff;
    padding: 0 13px;
    height: 26px;
    line-height: 26px;
    border-radius: 2em;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.1px;
    background-color: #28a745 !important;
  }

  .itemList__soldout {
    position: absolute;
    top: 0;
    right: 0;
    width: 45px !important;
    height: 45px !important;
    display: inline-block !important;
    background-image: url(https://www.kakaofriendsgolf.com/img/icons/mo-sold-out@2x.png);
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: 45px 45px;
    overflow: hidden;
    text-indent: -9999px;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
  }
`;
