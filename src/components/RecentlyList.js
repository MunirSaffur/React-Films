import React from "react";
import RecenltyItem from "./RecenltyItem";
import { Grid, GridItem } from "@chakra-ui/react";

export default function RecentlyList() {
  const recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed"));
  return (
    <div className="mb-3">
      <div className="recentlyHeading mb-3">
      <h4 className="h5 fw-bold text-light m-0">Recently Vewied</h4>
      </div>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {recentlyViewed
          ? recentlyViewed.slice(-3).map((item) => (
              <GridItem
                w="100%"
                key={recentlyViewed.indexOf(item)}
              >
                <RecenltyItem filmedata={item} />
              </GridItem>
            ))
          : ""}
      </Grid>
    </div>
  );
}
