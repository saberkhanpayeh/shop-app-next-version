import React, { useState } from "react";
import { useProductDetails } from "../../services/queries";
import styles from "./ProductsManagementPage.module.css";
import ProductItem from "../module/ProductItem";
import Pagination from "../module/Pagination";
import AlertModal from "../module/AlertModal";
import { useDispatch, useSelector } from "react-redux";
import OperationModal from "../module/OperationModal";
import AddLogo from "../icons/AddLogo";
import { addProductForm } from "../../features/modal/modalSlice";
import SearchProducts from "../module/SearchProducts";
function ProductsManagementPage() {
  const modalState = useSelector((store) => store.modal);
  const modalDispatch = useDispatch();
  const [searchProducts, setSearchProducts] = useState("");
  const [itemOffset, setItemOffset] = useState(1);
  const { data, error, isLoading, isError, isFetching } = useProductDetails(
    itemOffset,
    searchProducts
  );

  const products = data?.data.data || [];
  const totalPages = data?.data?.totalPages || 3;
  const addProductHandler = () => {
    modalDispatch(addProductForm());
  };
  return (
    <div className={styles.container}>
        <SearchProducts setSearchProducts={setSearchProducts}/>
      <div className={styles.addProduct}>
        <div>
            <AddLogo/>
          <p>مدیریت کالا</p>
        </div>
        <button onClick={addProductHandler}>افزودن محصول</button>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>نام کالا</th>
              <th>موجودی</th>
              <th>قیمت</th>
              <th>شناسه کالا</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <tr>isLoading....</tr>}
            {products &&
              products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
          </tbody>
        </table>
      </div>
      {products && !isFetching && !isLoading && (
        <Pagination
          itemOffset={itemOffset}
          setItemOffset={setItemOffset}
          totalPages={totalPages}
        />
      )}
      {modalState.modalType === "REMOVE_PRODUCT" ? <AlertModal /> : null}
      {modalState.modalType && modalState.modalType!=="REMOVE_PRODUCT" ? <OperationModal/>:null}
    </div>
  );
}

export default ProductsManagementPage;
