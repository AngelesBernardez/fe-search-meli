import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { api } from "./../../api";

const Results = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = () => {
    const search = new URLSearchParams(location.search);
    const item = search.get("search");

    api
      .get(`/api/items?search=${item}`)
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <div>
      <h1>This is the results page.</h1>
    </div>
  );
};

export default Results;
