import React, { useEffect, useCallback, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { api } from "./../../api";
import ResultItem from "./../../components/ResultItem/ResultItem";
import "./Results.css";

const Results = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const history = useHistory();

  const fetchResults = useCallback(() => {
    const search = new URLSearchParams(location.search);
    const item = search.get("search");

    api
      .get(`/api/items?q=${item}`)
      .then((response) => {
        setItems(response.data.items);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, [location.search]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  const renderProducts = () => {
    return items
      .slice(0, 4)
      .map(({ id, free_shipping, location, title, picture, price }, index) => {
        return (
          <ResultItem
            key={index}
            handleClick={() => history.push(`/items/${id}`)}
            freeShipping={free_shipping}
            title={title}
            picture={picture}
            price={price}
            location={location}
          />
        );
      });
  };
  return (
    <ul className="results-container grid-layout no-row-gap">
      <li className="centered-in-grid">Here breadcrumb</li>
      {items.length > 0 && renderProducts()}
    </ul>
  );
};

export default Results;
