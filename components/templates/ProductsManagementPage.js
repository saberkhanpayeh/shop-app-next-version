import React, { useState } from "react";
import { useProductDetails } from "../../services/queries";
import styles from "./ProductsManagementPage.module.css";
import Pagination from "../module/Pagination";
import AlertModal from "../module/AlertModal";
import { useDispatch, useSelector } from "react-redux";
import OperationModal from "../module/OperationModal";
import AddLogo from "../icons/AddLogo";
import { addProductForm } from "../../features/modal/modalSlice";
import SearchProducts from "../module/SearchProducts";
import ProductsList from "../module/ProductsList";
function ProductsManagementPage({ data }) {
  const modalState = useSelector((store) => store.modal);
  const modalDispatch = useDispatch();
  const [query, setQuery] = useState({ pageNumber: 1, searchProduct: "" });
  
  const products = data?.data || [];
  const totalPages = data?.totalPages || 3;
  const addProductHandler = () => {
    modalDispatch(addProductForm());
  };
  return (
    <div className={styles.container}>
      <SearchProducts query={query} setQuery={setQuery} />
      <div className={styles.addProduct}>
        <div>
          <AddLogo />
          <p>مدیریت کالا</p>
        </div>
        <button onClick={addProductHandler}>افزودن محصول</button>
      </div>
     <ProductsList products={products}/>
      {products && (
        <Pagination query={query} setQuery={setQuery} totalPages={totalPages} />
      )}
      {modalState.modalType === "REMOVE_PRODUCT" ? <AlertModal /> : null}
      {modalState.modalType && modalState.modalType !== "REMOVE_PRODUCT" ? (
        <OperationModal />
      ) : null}
    </div>
  );
}

export default ProductsManagementPage;
