import React from "react";
import { shortenProductId } from "../../utils/helper";

import styles from "./ProductItem.module.css";
import EditProduct from "../icons/EditProduct";
import RemoveProduct from "../icons/RemoveProduct";
import { useDispatch, useSelector } from "react-redux";
import { editProductForm, removeProduct } from "../../features/modal/modalSlice";
function ProductItem({ product }) {
const modalState=useSelector((store)=>store.modal);
const modalDispatch=useDispatch();
  const editProductHandler = () => {
    modalDispatch(editProductForm(product));
  };
  const removeProductHandler = () => {
    modalDispatch(removeProduct(product));
  };
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
      <td className={styles.format}>{shortenProductId(product.id)}</td>
      <td>
        <button onClick={editProductHandler}>
            <EditProduct/>
        </button>
        <button onClick={removeProductHandler}>
            <RemoveProduct/>
        </button>
      </td>
    </tr>
  );
}

export default ProductItem;
