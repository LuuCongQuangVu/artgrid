import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardLH from "../../../components/News/cardlh";
import CardInfor from "../../../components/News/cardinfor";
import CardLeft from "../../../components/News/cardleft";
import PleaseBuyACar from "../content/home/PleaseBuyACar";
import { useContext, useState } from "react";
import { ProductContext } from "../../../contexts/ProductContext";

export default function News() {
  const {
    productState: { products },
  } = useContext(ProductContext);
  const productcategory = products.filter((item) => item.category === "logo");
  return (
    <div style={{ padding: "36px 0" }}>
      <div className="TitleCar d-flex">
        <div
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "19px",
            margin: "auto",
            fontWeight: "bold",
          }}
        >
          <div className="SubTitleCar"> </div>
          <hr
            style={{
              borderBottom: "4px solid",
              width: "75%",
              color: "rgb(255, 11, 11)",
            }}
          />
        </div>
      </div>
      <PleaseBuyACar products={productcategory} />
    </div>
  );
}
