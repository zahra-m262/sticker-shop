import { useState } from "react";
import ProductListing from "../ProductListing";
import ReactPaginate from "react-paginate";

import "./paginateItems.scss";

const PaginateItems = ({
  productsPerPage,
  products,
  isLoading,
  isSuccess,
  isError,
}) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + productsPerPage;

  const currentProducts = products.slice(itemOffset, endOffset);
  console.log(`currentProducts: ${currentProducts}`);

  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageClick = (e) => {
    const newOffset = e.selected * productsPerPage;

    document.documentElement.scrollTop = 0;

    setItemOffset(newOffset);
  };

  return (
    <>
      <ProductListing
        currentProducts={currentProducts}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
      />

      <ReactPaginate
        containerClassName="container"
        pageClassName="page"
        activeClassName="active"
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayedb={5}
        pageCount={pageCount}
        previousLabel={null}
        nextLabel={null}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default PaginateItems;
