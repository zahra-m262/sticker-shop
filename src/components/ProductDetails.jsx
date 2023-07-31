import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CustomNumeralNumericFormat from "./Price";

import "./styles/productDetails.scss";
import ProductForm from "./ProductForm";
import { useGetProductQuery } from "../slices/productApi";

const ProductDetails = () => {
  const { productID } = useParams();

  const { data: product, isSuccess } = useGetProductQuery(productID);

  return (
    <div className="product-details-container">
      {isSuccess ? (
        <>
          <Helmet>
            <title>{product.title}</title>
          </Helmet>

          <div className="product-details-info">
            <div
              style={{
                position: "relative",
                height: "28rem",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <img
                src={`http://localhost:9000/images/${product.sticker}`}
                className="product-details-info-img"
                alt={product.title}
              />
            </div>
          </div>

          <div className="product-details-info-back-container">
            <Link to="/" className="product-details-info-back-link">
              <i
                style={{
                  width: "1rem",
                  display: "inline-flex",
                  marginLeft: ".25rem",
                }}
              >
                <ion-icon name="arrow-undo-outline"></ion-icon>
              </i>
              برگشت به صفحه ی محصولات
            </Link>

            <div>
              <h1 className="product-details-info-title">{product.title}</h1>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                }}
              >
                {product.description}
              </p>
              <div
                style={{
                  fontSize: "1.25rem",
                  lineHeight: "1.75rem",
                  color: "#5B21B6",
                  fontWeight: 500,
                  padding: "1rem .5rem",
                }}
              >
                <CustomNumeralNumericFormat
                  value={product.price}
                  thousandSeparator=","
                  prefix={` قیمت : `}
                  suffix={` تومان `}
                />
              </div>
            </div>

            <ProductForm product={product} />
          </div>
        </>
      ) : (
        <p>بارگذاری محصول...</p>
      )}
    </div>
  );
};

export default ProductDetails;
