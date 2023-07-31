import { useState } from "react";
import "./styles/productForm.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../slices/cartSlice";

const ProductForm = ({ product }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="product-form-container">
        <p style={{ color: "rgb(22,163,74)" }}>در انبار موجود است</p>
      </div>

      <button
        className="actBtnStyle"
        aria-label="cart-button"
        onClick={() => handleAddToCart({ ...product, cartQty: qty })}
      >
        اضافه به سبد خرید
        <i style={{ width: "1.25rem", marginRight: ".5rem" }}>
          <ion-icon name="cart-outline"></ion-icon>
        </i>
      </button>
    </div>
  );
};

export default ProductForm;
