import { useEffect, useState } from "react";
import dummy from "../database/data.json"
import Paging from "./Paging";
import styled from "styled-components";

export default function DetailItem () {
  // set array
  const [products, setProducts] = useState(dummy.products); 
  // total amount of items
  const [count, setCount] = useState(0);
  // currentPage
  const [currentPage, setCurrentPage] = useState(1);
  // number of items to be displayed on a page
  const [postPerPage] = useState(5);
  // index of the first item of the page
  const [indexOfFirstPost ,setIndexOfFirstPost] = useState(0);
  // index of the last item of the page
  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  // displayed items at page
  const [currentPosts, setCurrentPosts] = useState(0);

  useEffect(()=>{
    setCount(products.length);
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(products.slice(indexOfFirstPost, indexOfLastPost));
  },[currentPage, indexOfLastPost, indexOfFirstPost, products, postPerPage])

  const setPage = (error) => {
    setCurrentPage(error);
  };

  return (
    <Wrap>
      {currentPosts && products.length > 0 ? (
        currentPosts.map((item, idx)=> {
          return (
            <div className="card" key={idx}>
              <div>
                {item.name}
              </div>
              <div>
                <img 
                className="card__img"
                src={item.img} />
              </div>
            </div>
          )
        })
            ) : (
              <div> No posts.</div>
            )}
      <Paging page={currentPage} count={count} setPage={setPage} />
    </Wrap>
  )
}

const Wrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .card {
    position: relative;
    top: calc(50vh - 400px);
    left: calc(50vw - 50px);
  }

  .card__img {
    width: 100px;
    height: 100px;
  }
`
