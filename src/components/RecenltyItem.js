import React from "react";
import { Link } from "react-router-dom";
import { Text, Badge, Code } from "@chakra-ui/react";

export default function RecenltyItem({ filmedata }) {
  return (
    <div className="recentCardBody text-light"
    style={{ backgroundImage: `url(${filmedata.Poster})` }}>
      <div className="recentCardContent">
      <Text fontSize="lg" fontWeight="bold">
          {filmedata.Title.length > 17
            ? `${filmedata.Title?.substring(0, 40)}...`
            : filmedata.Title}
        </Text>

        <Link
          to={{
            pathname: `/film/${filmedata.Title}`,
            state: filmedata
          }}
          className="btn btn-warning btn-sm my-2"
        >
          Show Details
        </Link>
      </div>
    </div>
  );
}
