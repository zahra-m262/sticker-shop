import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./styles/cartTable.scss";
import CustomNumeralNumericFormat from "./Price";

import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  selectAll,
} from "../slices/cartSlice";
import { Helmet } from "react-helmet";
import QtyInput from "./common/QtyInput";

const CartTable = () => {
  const cart = useSelector(selectAll);
  const { cartTotalAmount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleQty = (e, item) => {
    if (e.target.value > item.cartQty) {
      handleAddToCart(item);
    } else {
      handleDecreaseCart(item);
    }
  };

  return (
    <div className="cart-table-container">
      <Helmet>
        <title>سبد خرید|فروشگاه استیکر</title>
      </Helmet>
      {cart.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <p>سبد خرید شما خالی است 🙃</p>
        </div>
      ) : (
        <>
          <h1 className="cart-table-product">سبد خرید شما </h1>

          <div className="cart-table-product-container">
            <table style={{ margin: "0 auto" }}>
              <thead>
                <tr className="cart-table-header-style">
                  <th className="cart-table-th">محصول</th>
                  <th className="cart-table-th">تعداد</th>
                  <th className="cart-table-th">قیمت</th>
                  <th className="cart-table-th">حذف</th>
                </tr>
              </thead>
              <tbody className="cart-table-body-style">
                {cart.map((item) => (
                  <tr key={item.id} className="cart-table-body-tr">
                    <td className="cart-table-body-td">
                      <img
                        src={`http://localhost:9000/images/${item.sticker}`}
                        alt={item.title}
                        height={64}
                        width={64}
                        className="cart-table-body-td-img"
                      />
                      <Link
                        to={`/products/${item.id}`}
                        className="cart-table-body-td-img-link"
                      >
                        {item.title}
                      </Link>
                    </td>
                    <td>
                      <QtyInput
                        style={{ marginLeft: "1rem" }}
                        qty={item.cartQty}
                        decrementQty={() => handleDecreaseCart(item)}
                        incrementQty={() => handleAddToCart(item)}
                      />
                    </td>
                    <td className="cart-table-body-td-numeric">
                      <CustomNumeralNumericFormat
                        value={item.price * item.cartQty}
                        thousandSeparator=","
                        prefix={` قیمت : `}
                        suffix={` تومان `}
                      />
                    </td>
                    <td className="cart-table-body-td-button">
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                        aria-label="delete-item"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        <i aria-hidden="true" className="close-icon">
                          <ion-icon name="close-circle-outline"></ion-icon>
                        </i>
                      </button>
                    </td>
                  </tr>
                ))}

                {cartTotalAmount === 0 ? null : (
                  <tr style={{ textAlign: "center" }}>
                    <td></td>
                    <td className="cart-table-total">قیمت کل :</td>
                    <td className="cart-table-numeric">
                      <CustomNumeralNumericFormat
                        value={cartTotalAmount}
                        thousandSeparator=","
                        suffix={` تومان `}
                      />
                    </td>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="cart-table-footer">
            <Link to="" className="cart-table-confirmation">
              تایید نهایی
              <i
                style={{
                  width: "1rem",
                  marginRight: ".5rem",
                  display: "inline-flex",
                }}
              >
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </i>
            </Link>

            <Link to="/" className="cart-table-back-link">
              <i
                style={{
                  width: "1rem",
                  marginRight: ".5rem",
                  display: "inline-flex",
                }}
              >
                <ion-icon name="arrow-back-outline"></ion-icon>
              </i>
              برگشت به صفحه محصولات
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartTable;
