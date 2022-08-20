import { useState } from "react";

const usePagination = (data, dataPerPage) => {
  const [pageNuber, setPageNumber] = useState(0);
  const pageVisited = pageNuber * dataPerPage;

  const displayData = data.slice(pageVisited, pagesVisited + dataPerPage);
  const pageCount = Math.ceil(data.length / dataPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  console.log("displayData", displayData);
  return { displayData, pageCount, changePage };
};

export default usePagination;
