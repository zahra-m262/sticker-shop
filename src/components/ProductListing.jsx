import ProductCard from "./ProductCard";

import "./styles/productListing.scss";

const ProductListing = ({ currentProducts, isSuccess, isLoading }) => {

  return (
    <div className="product-listing">
      {isSuccess ? (
        <>
          {currentProducts?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </>
      ) : isLoading ? (
        <p>در حال بارگذاری...</p>
      ) : (
        <p>مشکلی پیش آمده...</p>
      )}
    </div>
  );
};

export default ProductListing;
