import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "./../../api";
import "./ProductDetails.css";
import PriceItem from "../../components/PriceItem/PriceItem";
import ImageItem from "../../components/ImageItem/ImageItem";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = () => {
      api
        .get(`/api/items/${id}`)
        .then((response) => {
          setProduct(response.data.item);
        })
        .catch((error) => {
          throw new Error(error);
        });
    };

    fetchDetails();
  }, [id]);

  const { condition, description, picture, price, title } = product;
  console.log(price);
  return (
    <div className="product-details grid-layout">
      <div className="product-container centered-in-grid">
        <div className="left-block">
          <ImageItem picture={picture} altText={title} bigger />
          <div className="description">
            <h4>Descripción del producto</h4>
            <p>{description}</p>
          </div>
        </div>
        <div className="right-block">
          <p className="condition">
            {condition === "used" ? "Usado" : "Nuevo"}
          </p>
          <h3 className="title">{title}</h3>
          <PriceItem price={price} bigger />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
