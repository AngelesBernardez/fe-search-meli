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
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCategories = (id) => {
      api
        .get(`/api/categories/${id}`)
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          throw new Error(error);
        });
    };

    const fetchDetails = () => {
      api
        .get(`/api/items/${id}`)
        .then((response) => {
          setProduct(response.data.item);
        })
        .catch((error) => {
          throw new Error(error);
        });
      if (typeof product !== "undefined") fetchCategories(product.category_id);
    };

    fetchDetails();
  }, [id, product.category_id]);

  const { condition, description, picture, price, title } = product;
  return (
    <div className="grid-layout">
      <div className="product-details centered-in-grid">
        <Breadcrumb content={categories} />
        <div className="product-container ">
          <div className="left-block">
            <ImageItem picture={picture} altText={title} bigger />
            <div className="description">
              <TitleAndParagraph
                title="Descripción del producto"
                paragraph={description}
              />
            </div>
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
    </div>
  );
};

export default ProductDetails;
