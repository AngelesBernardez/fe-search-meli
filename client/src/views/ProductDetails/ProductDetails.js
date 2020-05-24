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
import { checkIfObjEmpty } from "./../../helpers";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = () => {
      api
        .get(`/api/items/${id}`)
        .then((response) => {
          setProduct(response.data.item);
          setCategories(response.data.categories);
        })
        .catch((error) => {
          throw new Error(error);
        });
    };

    fetchDetails();
  }, [id]);

  const {
    condition,
    description,
    picture,
    price,
    sold_quantity,
    title,
  } = product;
  const conditionTranslate = condition === "used" ? "Usado" : "Nuevo";

  return (
    <div className="grid-layout">
      <div className="product-details centered-in-grid">
        <Breadcrumb content={categories} />
        {!checkIfObjEmpty(product) && (
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
              <SmallText
                text={`${conditionTranslate} ${
                  sold_quantity > 0 ? " - " + sold_quantity + " Vendidos" : ""
                }`}
              />
              <div className="title">
                <ProductTitle title={title} bold />
              </div>
              <PriceItem price={price} bigger />
              <MainButton text="Comprar" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
