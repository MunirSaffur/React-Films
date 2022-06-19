import React from "react";
import { Text, Badge, Code } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FilmeItem = ({ filmdata }) => {

  // getting the film

  // adding recently viewed
  function addRecentlyViewed() {
    if (localStorage.getItem("recentlyViewed")) {
      const recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed"));
      if (recentlyViewed.some((item) => item.Title === filmdata.Title)) {
      } else {
        recentlyViewed.push(filmdata);
        localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
      }
    } else {
      const recentlyViewedArray = [];
      recentlyViewedArray.push(filmdata);
      localStorage.setItem(
        "recentlyViewed",
        JSON.stringify(recentlyViewedArray)
      );
    }
  }
  return (
    <div
      className="cardBody"
      style={{ backgroundImage: `url(${filmdata.Poster})` }}
    >
      <div className="cardContent">
        <Text fontSize="xl" fontWeight="bold">
          {filmdata.Title.length > 17
            ? `${filmdata.Title?.substring(0, 17)}...`
            : filmdata.Title}
        </Text>
        <Badge mx="1" colorScheme="green">
          {filmdata.Year}
        </Badge>
        <Code mx="1" colorScheme="red" children={filmdata.imdbID} />
        <Link
          to={{
            pathname: `/film/${filmdata.Title}`,
            state: filmdata
          }}
          className="btn btn-warning btn-sm my-2"
          onClick={() => addRecentlyViewed()}
        >
          Show Details
        </Link>
      </div>
    </div>
  );
};
export default FilmeItem;
