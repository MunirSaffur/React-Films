import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Badge, Skeleton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import dataSource from "../api/dataSource";

export default function FilmePage() {
  const location = useLocation();
  const shortData = location.state;
  const [pageData, setPageData] = useState({});

 useEffect(()=>{
  dataSource
  .get("/", {
    params: {
      i: shortData.imdbID,
      apikey: "b9e04cfb"
    }
  })
  .then((res) => setPageData(res.data));
 }, [pageData])

  return (
    <div className="row my-4 text-white">
      <Link to="/" className="text-white mb-4">
        <ArrowBackIcon /> Back
      </Link>
      <div className="col-4">
        {!pageData ? (
          <Skeleton height="350px" />
        ) : (
          <img className="w-100 rounded" src={pageData.Poster} />
        )}
      </div>
      <div className="col-8">
      {!pageData ? (
          <Skeleton height="350px" />
        ) : (
          <h1 className="h1">{pageData.Title}</h1>
        )}
        <p className="mb-1"><span className="fw-bold">Writer:</span> {pageData.Writer}</p>
        <p className="mb-1"><span className="fw-bold">Actors:</span> {pageData.Actors}</p>
        <p className="mb-1"><span className="fw-bold">Type:</span> {pageData.Type}</p>
        <p className="mb-1"><span className="fw-bold">Runtime:</span> {pageData.Runtime}</p>
        <p className="mb-1"><span className="fw-bold">Released:</span> {pageData.Released}</p>
        <p className="mb-1"><span className="fw-bold">imdbRating:</span> {pageData.imdbRating}</p>
        <Badge mx="1" colorScheme="green">
          {pageData.Year}
        </Badge>
        <Badge mx="1" colorScheme="red">
          {pageData.imdbID}
        </Badge>
      </div>
    </div>
  );
}
