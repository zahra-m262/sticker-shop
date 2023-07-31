import { Helmet } from "react-helmet";
import "./App.scss";
import MainLayout from "./components/layouts/MainLayout";
import Header from "./components/Header";
import PaginateItems from "./components/common/PaginateItems";
import { useGetProductsQuery } from "./slices/productApi";

const App = () => {
  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
  } = useGetProductsQuery();

  return (
    <MainLayout>
      <Helmet>
        <title>فروشگاه استیکر برنامه نویسی</title>
      </Helmet>

      <div className="products">
        <Header />
        <PaginateItems
          productsPerPage={6}
          products={products}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
        />
      </div>
    </MainLayout>
  );
};

export default App;
