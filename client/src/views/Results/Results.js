import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { api } from "./../../api";
import Breadcrumb from "./../../components/Breadcrumb/Breadcrumb";
import ResultItem from "./../../components/ResultItem/ResultItem";
import "./Results.css";

const Results = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const search = new URLSearchParams(location.search);
    const item = search.get("search");

    api
      .get(`/api/items?q=${item}`)
      .then((response) => {
        setItems(response.data.items);
        setCategories(response.data.categories);
      })
      .catch((error) => {
        setError(true);
      });
  }, [location.search]);

  /**
   * Renders the list of products
   * @param {Object} res - Express response object.
   * @returns {Array}.An array of items.
   */
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

  if (error) history.push("/no-results");

  return (
    <ul className="results-container grid-layout no-row-gap">
      <li
        className={`centered-in-grid ${categories.length === 0 ? "empty" : ""}`}
      >
        {categories.length > 0 && <Breadcrumb content={categories} />}
      </li>
      {items.length > 0 && renderProducts()}
    </ul>
  );
};

export default Results;
