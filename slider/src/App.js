import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const array = [
  {
    id: 1,
    text: "라이언"
  },
  {
    id: 2,
    text: "어피치"
  },
  {
    id: 3,
    text: "제이드"
  }
];

export default function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState("0");
  const [isHover, setIsHover] = useState(false);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          right: "20px",
          display: isHover ? "block" : "none",
          background: "green"
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: isHover ? "block" : "none",
          left: "20px",
          background: "green",
          zIndex: "20"
        }}
        onClick={onClick}
      />
    );
  }

  const handleAfterChange = (index) => {
    console.log("after change", index);
    setCurrentSlide(index);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: handleAfterChange
  };

  return (
    <Wrap
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Slider {...settings}>
        {array.map((element) => {
          return (
            <div
              className={`sliderWrap ${
                element.id === 1 ? "num1" : element.id === 2 ? "num2" : "num3"
              }`}
              key={element.id}
            >
              <h3>{element.text}</h3>
            </div>
          );
        })}
      </Slider>
      <div>
        {" "}
        {currentSlide + 1} / {array.length}{" "}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  .sliderWrap.num1 {
    background-image: url("https://shopimg.kakaofriendsgolf.com/live/images/2023/1/2/10/117580_1672622112593.png");
    background-color: #fff3dd;
    height: 740px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 740px;
    display: flex !important;
    align-items: center;
  }

  .sliderWrap.num2 {
    background-image: url("https://shopimg.kakaofriendsgolf.com/live/images/2022/12/19/10/922469_1671412154586.png");
    background-color: #f8d58a;
    height: 740px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 740px;
    display: flex !important;
    align-items: center;
  }

  .sliderWrap.num3 {
    background-image: url("https://shopimg.kakaofriendsgolf.com/live/images/2022/11/16/13/853128_1668573855540.png");
    background-color: #a9d7f1;
    height: 740px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 740px;
    display: flex !important;
    align-items: center;
  }
`;
