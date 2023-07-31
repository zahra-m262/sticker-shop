import { Link } from "react-router-dom";

import "./styles/navbar.scss";
import CustomNumeralNumericFormat from "./Price";
import { useSelector } from "react-redux";
import { selectAll } from "../slices/cartSlice";

const NavBar = () => {
  const cart = useSelector(selectAll);
  return (
    <header className="navbar-header">
      <div className="sticker-container">
        <Link to="/" className="market">
          <h1 className="sticker-container-h1">
            <span className="sticker-container-span">فروشگاه استیکر</span>
          </h1>
        </Link>

        <div>
          <Link to="/cart" className="market-cart">
            <i className="icon">
              <ion-icon name="cart-outline"></ion-icon>
            </i>
            {cart.length === 0 ? null : (
              <div className="icon-number">
                <CustomNumeralNumericFormat
                  value={cart.length}
                  thousandSeparator=","
                />
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
