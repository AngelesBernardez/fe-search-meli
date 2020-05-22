import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { api } from "./../../api";

const Results = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = () => {
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
  };

  //Temporary awful
  const renderProducts = () => {
    return items.map(({ id, title }, index) => {
      return (
        <p key={index} onClick={() => history.push(`/items/${id}`)}>
          {title}
        </p>
      );
    });
  };
  return (
    <div>
      <h1>This is the results page.</h1>
      {items.length > 0 && renderProducts()}
    </div>
  );
};

export default Results;
