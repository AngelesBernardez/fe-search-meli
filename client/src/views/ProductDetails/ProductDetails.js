import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "./../../api";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = () => {
    api
      .get(`/api/items/${id}`)
      .then((response) => {
        console.log(response);
        // setItems(response.data.items);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return <h1>This is the Product Details page.</h1>;
};

export default ProductDetails;
