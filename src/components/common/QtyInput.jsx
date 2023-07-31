import "./qtyInput.scss";

const QtyInput = ({ incrementQty, qty, decrementQty }) => {
  return (
    <div className="qty-input-container">
      <button
        data-action="increment"
        onClick={incrementQty}
        className="qty-input-button"
      >
        <span>+</span>
      </button>
      <input
        type="number"
        className="qty-input"
        name="quantity"
        value={qty}
        onChange={() => {}}
      ></input>
      <button
        data-action="decrement"
        onClick={decrementQty}
        className="qty-input-button-decrement"
      >
        <span>-</span>
      </button>
    </div>
  );
};

export default QtyInput;
