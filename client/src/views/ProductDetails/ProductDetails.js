import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "./../../api";
import "./ProductDetails.css";
import PriceItem from "../../components/PriceItem/PriceItem";
import ImageItem from "../../components/ImageItem/ImageItem";
import MainButton from "../../components/MainButton/MainButton";
import TitleAndParagraph from "../../components/TitleAndParagraph/TitleAndParagraph";
import SmallText from "../../components/SmallText/SmallText";
import ProductTitle from "../../components/ProductTitle/ProductTitle";

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
          <div className="description"></div>
          <TitleAndParagraph
            title="Descripción del producto"
            paragraph={description}
          />
        </div>
        <div className="right-block">
          <SmallText text={condition === "used" ? "Usado" : "Nuevo"} />
          <div className="title">
            <ProductTitle title={title} bold />
          </div>
          <PriceItem price={price} bigger />
          <MainButton text="Comprar" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
