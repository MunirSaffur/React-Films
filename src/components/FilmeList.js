import React, { useEffect, useState } from "react";
import FilmItem from "./FilmeItem";
import { Grid, GridItem, Skeleton, useToast } from "@chakra-ui/react";
import { Form, Pagination, Button } from "react-bootstrap";
import dataSource from "../api/dataSource";
import RecentlyList from "./RecentlyList";



const FilmList = () => {

  const [films, setfilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useState({
    params: {
      s: "pokemon",
      apikey: "b9e04cfb",
      page: 1,
      type: "",
      y: ""
    }
  });
  const toast = useToast();

  //   for getting data from API
  useEffect(() => {
    dataSource.get("/", params).then((res) => {
      setfilms(res.data.Search);
      setLoading(false);
    });
  },[params]);

  // handle search
  function handleSearch(e) {
    const newParams = { ...params };
    newParams.params.s = e.target.value;
    setParams(newParams);
  }

  // handle pagination
  function handlePagination(action) {
    if (params.params.page == 1 && action == -1) {
      toast({
        title: "Warning!",
        description: "You are in the first page allrady.",
        status: "warning",
        duration: 3000,
        isClosable: true
      });
    } else {
      const newParams = { ...params };
      newParams.params.page += action;
      setParams(newParams);
      setLoading(true);
    }
  }

  // handle type filter
  function handleType(type) {
    const newParams = { ...params };
    newParams.params.type = type;
    setParams(newParams);
    setLoading(true);
  }

  // handle Release Date
  function handleDate(date){
    const newParams = { ...params };
    newParams.params.y = date.target.value;
    setParams(newParams);
    setLoading(true);
  }
  return (
    <div>
      {/* filter Bar */}
      <Grid templateColumns="repeat(3, 1fr)" gap={6} className="">
        <GridItem w="100%">
          <h4 className="h5 fw-bold text-light m-1">Search</h4>
          <Form.Control
            type="search"
            placeholder="Pokemon"
            className="mb-3 bg-light"
            aria-label="Search"
            onChange={(e) => handleSearch(e)}
            value={params.params.s}
          />
        </GridItem>
        <GridItem w="100%">
          <h4 className="h5 fw-bold text-light m-1">Release Date</h4>
          <Form.Control
            type="number"
            placeholder="Release Date"
            className="mb-3 bg-light"
            aria-label="ReleaseDate"
            onChange={(e) => handleDate(e)}
            value={params.params.y}
          />
        </GridItem>
        <GridItem w="100%">
          <h4 className="h5 fw-bold text-light m-1">Type</h4>
          <Button
            size="sm"
            className="btn btn-info me-2"
            onClick={() => handleType("")}
          >
            All
          </Button>
          <Button
            size="sm"
            className="btn btn-info me-2"
            onClick={() => handleType("movie")}
          >
            Movie
          </Button>
          <Button
            size="sm"
            className="btn btn-info me-2"
            onClick={() => handleType("series")}
          >
            Series
          </Button>
          <Button
            size="sm"
            className="btn btn-info me-2"
            onClick={() => handleType("episode")}
          >
            Episode
          </Button>
          
        </GridItem>
      </Grid>

      {/* Recently Viewed */}
      {JSON.parse(localStorage.getItem("recentlyViewed")) ? (
        <RecentlyList />
      ) : (
        ""
      )}

      {/* films grid */}
      <h4 className="h5 fw-bold text-light m-1">Filme List</h4>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} className="mb-4">
        {loading ? (
          [1, 2, 3, 4, 5].map((item) => (
            // Skeleton for loading
            <GridItem key={item} w="100%">
              <Skeleton height="350px" />
            </GridItem>
          ))
        ) : films ? (
          films.map((filme) => (
            <GridItem key={films.indexOf(filme)} w="100%">
              <FilmItem filmdata={filme} />
            </GridItem>
          ))
        ) : (
          <h4 className="h5 fw-bold text-light">No Resault</h4>
        )}
      </Grid>
      <Pagination className="mb-4">
        <Pagination.Prev onClick={() => handlePagination(-1)} />
        <Pagination.Ellipsis />
        <Pagination.Next onClick={() => handlePagination(+1)} />
      </Pagination>
    </div>
  );
};

export default FilmList;
