import { Link } from "react-router-dom";

import "./styles/productCard.scss";
import CustomNumeralNumericFormat from "./Price";

const ProductCard = ({ product }) => {
  const { id, title, description, price, sticker } = product;

  return (
    <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
      <div className="product-card-container">
        <div className="product-card-container-img">
          <img
            src={`http://localhost:9000/images/${sticker}`}
            className="product-card-img"
            alt={title}
          />
        </div>
        <div className="product-card-container-cart">
          <div className="product-card-title">{title}</div>
          <div className="product-card-description">{description}</div>
          <div className="product-card-price">
            <CustomNumeralNumericFormat
              value={price}
              thousandSeparator=","
              prefix={`قیمت  : `}
              suffix={` تومان `}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
