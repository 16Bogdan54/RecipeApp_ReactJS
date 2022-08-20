import useFetch from "/src/hooks/useFetch.js";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { RecipeCard } from "./RecipeCard";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "/src/assets/Global.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Recipes = () => {
  const url = "https://tasty.p.rapidapi.com/recipes/list?from=10&size=40";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${import.meta.env.VITE_APP_API_KEY}`,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  const dataPerPage = 15;
  const { data: recipes, isLoading, error } = useFetch(url, options);

  if (isLoading) return <h2>Loading...</h2>;

  if (error) alert("Error", error);

  const [pageNuber, setPageNumber] = useState(0);

  if (recipes !== null) {
    const data = Object.values(recipes.results);

    const pagesVisited = pageNuber * dataPerPage;

    const displayData = data.slice(pagesVisited, pagesVisited + dataPerPage);
    const pageCount = Math.ceil(data.length / dataPerPage);

    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

    return (
      <motion.div
        className="recipes"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container>
          {displayData.map((card) => {
            return (
              <RecipeCard
                thumbnail={card.thumbnail_url}
                heading={card.name}
                yields={card.yields}
                country={card.country}
                language={card.language}
                id={card.id}
                key={card.id}
              />
            );
          })}
        </Container>
        <ReactPaginate
          previousLabel={<BsChevronLeft />}
          nextLabel={<BsChevronRight />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="paginationBttns d-flex justify-content-center algin-items-center p-1 fs-5"
          previousLinkClassName="previousBttn mx-1 p-1"
          nextLinkClassName="nextBttn mx-1 p-1"
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive bg-green-dark text-white"}
        />
      </motion.div>
    );
  }
};
