import React from "react";
import Pagination from "react-js-pagination";
import "../Paging.css";

export default function Paging ({ page, count, setPage }) {

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={5}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={"<"}
      nextPageText={">"}
      onChange={setPage}
    />
  )
}