import styled from "styled-components";
import dummy from "../database/data.json";
import { useParams } from "react-router-dom";

export default function Product() {
  // parameters for dynamic routing
  const params = useParams().id;

  const productList = dummy.products.find((item) => item.id === Number(params));

  console.log(productList);

  return (
    <Wrap>
      <img className="imgBox" src={productList.img} />
      <div>{productList.name}</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  .imgBox {
    width: 100px;
    height: 100px;
  }
`;
